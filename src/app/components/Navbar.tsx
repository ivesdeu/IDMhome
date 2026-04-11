import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'motion/react';

const navLinkClass = 'text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]';
const navLinkActive = 'text-cta';

const mobileLinkClass =
  'py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] border-b border-border font-body block';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.classList.add('ibm-mobile-nav-open');
    else document.body.classList.remove('ibm-mobile-nav-open');
    return () => document.body.classList.remove('ibm-mobile-nav-open');
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: 'rgba(250, 250, 249, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Ives Deutschmann Marketing – Home"
          onClick={closeMobile}
        >
          <img src="/idm-logo.png?v=2" alt="Ives Deutschmann Marketing" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 min-w-0">
          <Link to="/#about" className={`${navLinkClass} whitespace-nowrap`}>
            About
          </Link>
          <Link
            to="/#core-capabilities"
            className={`${navLinkClass} whitespace-nowrap`}
            onClick={() => document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Services
          </Link>
          <NavLink
            to="/technology"
            className={({ isActive }) => `${navLinkClass} whitespace-nowrap ${isActive ? navLinkActive : ''}`}
          >
            Technology
          </NavLink>
          <Link to="/case-studies" className={`${navLinkClass} whitespace-nowrap`}>
            Case Studies
          </Link>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${navLinkClass} whitespace-nowrap ${isActive ? navLinkActive : ''}`}
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <button
            type="button"
            className="ibm-mobile-menu-btn md:hidden"
            aria-controls="ibm-mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="ibm-mm-line" aria-hidden />
            <span className="ibm-mm-line" aria-hidden />
            <span className="ibm-mm-line" aria-hidden />
          </button>
          <NavLink
            to="/contact"
            className="px-5 py-2.5 rounded-full text-white text-[0.78rem] font-medium uppercase tracking-[0.12em] bg-cta hover:bg-cta-hover transition-colors font-body flex items-center justify-center shrink-0"
          >
            Book a Call
          </NavLink>
        </div>
      </div>

      <div
        id="ibm-mobile-menu"
        className={`md:hidden border-t border-border ${mobileOpen ? '' : 'hidden'}`}
        style={{
          background: 'rgba(250, 250, 249, 0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-2 pb-5 flex flex-col">
          <Link to="/#about" className={mobileLinkClass} onClick={closeMobile}>
            About
          </Link>
          <Link
            to="/#core-capabilities"
            className={mobileLinkClass}
            onClick={() => {
              closeMobile();
              requestAnimationFrame(() =>
                document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })
              );
            }}
          >
            Services
          </Link>
          <NavLink
            to="/technology"
            className={({ isActive }) => `${mobileLinkClass} ${isActive ? navLinkActive : ''}`}
            onClick={closeMobile}
          >
            Technology
          </NavLink>
          <Link to="/case-studies" className={mobileLinkClass} onClick={closeMobile}>
            Case Studies
          </Link>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${mobileLinkClass} border-b-0 ${isActive ? navLinkActive : ''}`}
            onClick={closeMobile}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
