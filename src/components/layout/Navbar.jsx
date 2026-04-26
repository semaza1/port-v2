import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Award, FlaskConical, Users, MessageSquare, Images } from 'lucide-react';
import Button from '@/components/ui/Button';

/* ─── Dropdown items ──────────────────────────────────────── */
const BEYOND_ITEMS = [
  {
    label: 'Certifications',
    desc:  'Courses & credentials',
    icon:  <Award size={15} />,
    href:  '/beyond-code#certifications',
    color: '#3B82F6',
  },
  {
    label: 'Math & Physics',
    desc:  'Analytical thinking',
    icon:  <FlaskConical size={15} />,
    href:  '/beyond-code#math-physics',
    color: '#8B5CF6',
  },
  {
    label: 'Teaching & Mentorship',
    desc:  'Helping others grow',
    icon:  <Users size={15} />,
    href:  '/beyond-code#teaching',
    color: '#10B981',
  },
  {
    label: 'Gallery',
    desc:  'Events & moments',
    icon:  <Images size={15} />,
    href:  '/beyond-code#gallery',
    color: '#EC4899',
  },
];

/* ─── Main nav links ──────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',     to: '/',          end: true  },
  { label: 'About',    to: '/#about',    end: false },
  { label: 'Projects', to: '/#projects', end: false },
  { label: 'Resume',   to: '/resume',    end: true  },
  { label: 'Contact',  to: '/#contact',  end: false },
];

/* ─── Smooth scroll for hash links ───────────────────────── */
function useSmoothHashNav() {
  const location = useLocation();
  return useCallback((e, to) => {
    if (!to.includes('#')) return;
    const [path, hash] = to.split('#');
    // If we're already on the right page, just scroll
    if (!path || path === '/' || location.pathname === path) {
      const el = document.getElementById(hash);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    }
    // Otherwise let React Router navigate then scroll
  }, [location.pathname]);
}

/* ─── Dropdown menu ───────────────────────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, y: -6, scale: 0.97,
    transition: { duration: 0.15 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -6 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

function BeyondDropdown({ isOpen, onNavigate }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 z-50"
          role="menu"
          aria-label="Beyond Code sections"
        >
          {/* Arrow tip */}
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-border bg-bg-secondary"
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative bg-bg-secondary border border-border rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="px-4 py-3 border-b border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary">
                Beyond Code
              </p>
            </div>

            {/* Items */}
            <div className="p-2">
              {BEYOND_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={item.href}
                    onClick={onNavigate}
                    role="menuitem"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {/* Icon box */}
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0 transition-colors duration-150"
                      style={{
                        background: item.color + '15',
                        border: `1px solid ${item.color}25`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-150 leading-none mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-mono text-[10px] text-text-tertiary leading-none">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow hint */}
                    <motion.span
                      className="ml-auto text-text-tertiary group-hover:text-accent transition-colors duration-150 flex-shrink-0"
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                    >
                      <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer — view all */}
            <div className="px-3 pb-3">
              <Link
                to="/beyond-code"
                onClick={onNavigate}
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-border text-xs font-medium text-text-tertiary hover:text-text-primary hover:border-border-strong hover:bg-white/[0.03] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View all sections
                <svg width="11" height="11" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Navbar ──────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen,   setDropOpen]   = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const location       = useLocation();
  const dropRef        = useRef(null);
  const handleHashClick = useSmoothHashNav();

  const isBeyondActive = location.pathname === '/beyond-code';

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact'];
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHash(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [location]);

  /* Lock body scroll on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isLinkActive = (to) => {
    if (to === '/' && location.pathname === '/' && !activeHash) return true;
    if (to.includes('#')) return activeHash === to.split('#')[1];
    return location.pathname === to;
  };

  const closeAll = () => {
    setDropOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="max-content">
          <nav className="flex items-center justify-between h-16" aria-label="Main navigation">

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Emmanuel Semaza — Home"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/40 group-hover:bg-accent/15 transition-all duration-200"
              >
                <img src="/semaza.jpg" alt="" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent shadow-glow-sm" />
              </motion.div>
              <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-200 hidden xs:block">
                Emmanuel<span className="text-text-tertiary">.</span>
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <ul className="hidden md:flex items-center gap-1" role="list">

              {/* Regular links before Beyond Code */}
              {['Home', 'About', 'Projects'].map((label) => {
                const link = NAV_LINKS.find((l) => l.label === label);
                const active = isLinkActive(link.to);
                return (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={(e) => handleHashClick(e, link.to)}
                      className={[
                        'relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                        active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary',
                      ].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-accent rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </li>
                );
              })}

              {/* ── Beyond Code dropdown ── */}
              <li ref={dropRef} className="relative">
                <button
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                  onClick={() => setDropOpen((v) => !v)}
                  className={[
                    'relative flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isBeyondActive || dropOpen
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary',
                  ].join(' ')}
                  aria-haspopup="true"
                  aria-expanded={dropOpen}
                >
                  Beyond Code
                  <motion.span
                    animate={{ rotate: dropOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={13} className="text-text-tertiary" />
                  </motion.span>
                  {isBeyondActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Invisible bridge so mouse can reach dropdown without gap */}
                {dropOpen && (
                  <div
                    className="absolute top-full left-0 right-0 h-3"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    aria-hidden="true"
                  />
                )}

                <div
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <BeyondDropdown isOpen={dropOpen} onNavigate={closeAll} />
                </div>
              </li>

              {/* Resume + Contact */}
              {['Resume', 'Contact'].map((label) => {
                const link = NAV_LINKS.find((l) => l.label === label);
                const active = isLinkActive(link.to);
                return (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={(e) => handleHashClick(e, link.to)}
                      className={[
                        'relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                        active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary',
                      ].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-accent rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* ── CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Button
                  as="a"
                  href="mailto:semazaemmanuel@gmail.com"
                  variant="primary"
                  size="sm"
                  iconRight={
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                >
                  Let's Talk
                </Button>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen((v) => !v)}
                className={[
                  'md:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  mobileOpen
                    ? 'bg-bg-tertiary border-border-strong text-text-primary'
                    : 'bg-transparent border-border text-text-secondary hover:text-text-primary hover:border-border-strong',
                ].join(' ')}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-bg-primary/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              key="drawer"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-bg-secondary border-l border-border flex flex-col md:hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <span className="font-heading font-semibold text-sm text-text-primary">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close menu"
                >
                  <X size={14} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="list">

                  {/* Regular links */}
                  {NAV_LINKS.map(({ label, to }, i) => {
                    const active = isLinkActive(to);
                    return (
                      <motion.li
                        key={to}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <NavLink
                          to={to}
                          onClick={(e) => { handleHashClick(e, to); setMobileOpen(false); }}
                          className={[
                            'flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors duration-150',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                            active
                              ? 'bg-accent/10 text-accent border border-accent/20'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent',
                          ].join(' ')}
                          aria-current={active ? 'page' : undefined}
                        >
                          {label}
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />}
                        </NavLink>
                      </motion.li>
                    );
                  })}

                  {/* Beyond Code accordion */}
                  <motion.li
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                  >
                    {/* Toggle button */}
                    <button
                      onClick={() => setMobileDropOpen((v) => !v)}
                      className={[
                        'w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border',
                        isBeyondActive || mobileDropOpen
                          ? 'bg-accent/10 text-accent border-accent/20'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border-transparent',
                      ].join(' ')}
                      aria-expanded={mobileDropOpen}
                    >
                      Beyond Code
                      <motion.span
                        animate={{ rotate: mobileDropOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence>
                      {mobileDropOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3 py-1">
                            {BEYOND_ITEMS.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
                              >
                                <span style={{ color: item.color }}>{item.icon}</span>
                                <span>{item.label}</span>
                              </Link>
                            ))}
                            <Link
                              to="/beyond-code"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-accent hover:text-accent-hover transition-colors duration-150"
                            >
                              View all →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                </ul>
              </nav>

              {/* Drawer footer */}
              <div className="px-4 py-6 border-t border-border">
                <Button
                  as="a"
                  href="mailto:semazaemmanuel@gmail.com"
                  variant="primary"
                  size="md"
                  className="w-full"
                  iconRight={
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                >
                  Let's Talk
                </Button>
                <p className="mt-3 text-center text-xs text-text-tertiary font-mono">
                  semazaemmanuel@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}