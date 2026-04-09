#!/usr/bin/env node
/**
 * Verifies WordPress theme zip layout (style.css must be at theme-folder/style.css).
 * Writes NDJSON to debug log + POSTs to Cursor debug ingest.
 */
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const zipPath = join(root, 'ibmcustom-wp-theme.zip');
const styleOnDisk = join(root, 'wp-theme', 'ibmcustom', 'style.css');

const LOG_PATH = join(root, '.cursor', 'debug-b11729.log');
const INGEST =
  'http://127.0.0.1:7482/ingest/dc0ea0a2-df30-4232-97a7-91955a3f33b4';
const SESSION = 'b11729';

function logLine(payload) {
  const line = JSON.stringify({
    sessionId: SESSION,
    timestamp: Date.now(),
    runId: process.env.VERIFY_RUN_ID || 'verify',
    ...payload,
  });
  try {
    appendFileSync(LOG_PATH, line + '\n', 'utf8');
  } catch {
    // .cursor may not exist in CI
  }
  fetch(INGEST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': SESSION,
    },
    body: line,
  }).catch(() => {});
}

// #region agent log
logLine({
  hypothesisId: 'H0',
  location: 'verify-wp-theme-package.mjs:start',
  message: 'verify script start',
  data: { zipExists: existsSync(zipPath), styleOnDisk: existsSync(styleOnDisk) },
});

const hypotheses = {
  H1: 'Zip root is wrong (e.g. wp-theme/...) so WP looks for style.css one level too shallow',
  H2: 'style.css missing from zip entirely',
  H3: 'style.css only appears under unexpected path (nested ibmcustom/ibmcustom)',
  H4: 'Zip file missing — user never ran npm run zip-theme',
  H5: 'Case sensitivity: Style.css vs style.css in zip',
};

logLine({
  hypothesisId: 'H-meta',
  location: 'verify-wp-theme-package.mjs:hypotheses',
  message: 'hypothesis list',
  data: hypotheses,
});

if (!existsSync(zipPath)) {
  logLine({
    hypothesisId: 'H4',
    location: 'verify-wp-theme-package.mjs',
    message: 'CONFIRM zip missing at repo root',
    data: { zipPath },
  });
  console.error('Missing:', zipPath, '\nRun: npm run zip-theme');
  process.exit(1);
}

let listing = '';
try {
  listing = execSync(`unzip -l "${zipPath}"`, {
    encoding: 'utf8',
    maxBuffer: 4 * 1024 * 1024,
  });
} catch (e) {
  logLine({
    hypothesisId: 'H4',
    location: 'verify-wp-theme-package.mjs:unzip-l',
    message: 'unzip -l failed',
    data: { err: String(e) },
  });
  console.error(e);
  process.exit(1);
}

const lines = listing.split('\n');
const styleLines = lines.filter((l) => /style\.css/i.test(l));
const hasIbmcustomStyle = lines.some((l) =>
  /ibmcustom\/style\.css\s*$/i.test(l.trim()) ||
  /\sibmcustom\/style\.css$/i.test(l),
);
const hasRootStyle = lines.some((l) => /^\s*\d+.*\sstyle\.css\s*$/i.test(l));

logLine({
  hypothesisId: 'H2',
  location: 'verify-wp-theme-package.mjs:listing',
  message: 'zip listing style.css matches',
  data: {
    styleLineCount: styleLines.length,
    styleSample: styleLines.slice(0, 5),
    hasIbmcustomStyle,
    hasRootStyle,
  },
});

// WordPress expects: one top-level folder in zip containing style.css
// Accept: ibmcustom/style.css (CONFIRMED good)
// Reject: only wp-theme/ibmcustom/style.css as first path segment = wrong if user uploaded wp-theme.zip

const topLevelFolders = new Set();
for (const line of lines) {
  const m = line.match(/\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}\s+.*?\s+(\S+)\s*$/);
  if (!m) continue;
  const p = m[1].replace(/^\//, '');
  const seg = p.split('/')[0];
  if (seg && !seg.includes('.')) topLevelFolders.add(seg);
}

logLine({
  hypothesisId: 'H1',
  location: 'verify-wp-theme-package.mjs:topLevel',
  message: 'top-level zip entries (directories)',
  data: { topLevelFolders: [...topLevelFolders] },
});

const wpLikelyOk = hasIbmcustomStyle && topLevelFolders.has('ibmcustom');
logLine({
  hypothesisId: 'H1',
  location: 'verify-wp-theme-package.mjs:verdict',
  message: wpLikelyOk ? 'ZIP layout OK for WP upload' : 'ZIP layout likely WRONG for WP',
  data: { wpLikelyOk },
});

console.log(
  wpLikelyOk
    ? 'OK: ibmcustom/style.css found in zip. Upload ibmcustom-wp-theme.zip to WordPress.'
    : 'CHECK: style.css path or zip root may be wrong. See .cursor/debug-b11729.log',
);

process.exit(wpLikelyOk ? 0 : 2);
