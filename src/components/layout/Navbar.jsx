import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Home',     to: '/',        end: true  },
  { label: 'About',    to: '/#about',  end: false },
  { label: 'Projects', to: '/#projects', end: false },
  { label: 'Resume',   to: '/resume',  end: true  },
  { label: 'Academics ↷',   to: '/academics',  end: true  },
  { label: 'Contact',  to: '/#contact', end: false },
];

// Smooth scroll handler for hash links
function useSmoothHashNav() {
  const location = useLocation();

  const handleHashClick = useCallback((e, to) => {
    if (!to.includes('#')) return;

    const hash = to.split('#')[1];
    const el   = document.getElementById(hash);

    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${hash}`);
    }
  }, []);

  return handleHashClick;
}

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeHash,   setActiveHash]   = useState('');
  const location = useLocation();
  const handleHashClick = useSmoothHashNav();

  // Detect scroll for navbar background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isLinkActive = (to) => {
    if (to === '/' && location.pathname === '/' && !activeHash) return true;
    if (to.includes('#')) return activeHash === to.split('#')[1];
    return location.pathname === to;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="max-content">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Emmanuel Semaza — Home"
            >
              {/* Logo mark */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/40 group-hover:bg-accent/15 transition-all duration-200"
              >
                <img src="/semaza.jpg" alt="" />
                {/* Glow dot */}
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent shadow-glow-sm" />
              </motion.div>

              <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-200 hidden xs:block">
                Emmanuel<span className="text-text-tertiary">.</span>
              </span>
            </Link>

            {/* ── Desktop Links ── */}
            <ul
              className="hidden md:flex items-center gap-1"
              role="list"
            >
              {NAV_LINKS.map(({ label, to }) => {
                const active = isLinkActive(to);
                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={(e) => handleHashClick(e, to)}
                      className={[
                        'relative px-3.5 py-2 rounded-md text-sm font-medium',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                        active
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary',
                      ].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                      {/* Active underline indicator */}
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

            {/* ── CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              {/* Let's Talk CTA — desktop */}
              <div className="hidden md:block">
                <Button
                  as="a"
                  href="mailto:emmanuelsemaza@gmail.com"
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

              {/* Mobile hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen((v) => !v)}
                className={[
                  'md:hidden flex items-center justify-center w-9 h-9 rounded-lg',
                  'border transition-colors duration-150',
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
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate:  90,  opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate: -90,  opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
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

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={[
                'fixed top-0 right-0 bottom-0 z-50',
                'w-72 bg-bg-secondary border-l border-border',
                'flex flex-col md:hidden',
                'shadow-[0_0_60px_rgba(0,0,0,0.6)]',
              ].join(' ')}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <span className="font-heading font-semibold text-sm text-text-primary">
                  Menu
                </span>
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
              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map(({ label, to }, i) => {
                    const active = isLinkActive(to);
                    return (
                      <motion.li
                        key={to}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                      >
                        <NavLink
                          to={to}
                          onClick={(e) => {
                            handleHashClick(e, to);
                            setMobileOpen(false);
                          }}
                          className={[
                            'flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium',
                            'transition-colors duration-150',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                            active
                              ? 'bg-accent/10 text-accent border border-accent/20'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent',
                          ].join(' ')}
                          aria-current={active ? 'page' : undefined}
                        >
                          {label}
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                          )}
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-4 py-6 border-t border-border">
                <Button
                  as="a"
                  href="mailto:emmanuelsemaza@gmail.com"
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
                  emmanuelsemaza@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}