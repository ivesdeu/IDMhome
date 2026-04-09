import React from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'motion/react';

const navLinkClass = 'text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]';
const navLinkActive = 'text-cta';

export function Navbar() {
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
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" aria-label="Ives Deutschmann Marketing – Home">
          <img src="/idm-logo.png?v=2" alt="Ives Deutschmann Marketing" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/#about" className={navLinkClass}>
            About
          </Link>
          <Link
            to="/#core-capabilities"
            className={navLinkClass}
            onClick={() => document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Services
          </Link>
          <NavLink
            to="/technology"
            className={({ isActive }) => `${navLinkClass} ${isActive ? navLinkActive : ''}`}
          >
            Technology
          </NavLink>
          <Link to="/case-studies" className={navLinkClass}>
            Case Studies
          </Link>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${navLinkClass} ${isActive ? navLinkActive : ''}`}
          >
            Contact
          </NavLink>
        </div>

        <NavLink
          to="/contact"
          className="px-5 py-2.5 rounded-full text-white text-[0.78rem] font-medium uppercase tracking-[0.12em] bg-cta hover:bg-cta-hover transition-colors font-body flex items-center justify-center"
        >
          Book a Call
        </NavLink>
      </div>
    </motion.nav>
  );
}
