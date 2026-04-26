import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href:  'https://github.com/semaza1',
    icon:  <Github size={16} />,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/emmanuelsemaza',
    icon:  <Linkedin size={16} />,
  },
  {
    label: 'Email',
    href:  'mailto:semazaemmanuel@gmail.com',
    icon:  <Mail size={16} />,
  },
];

const NAV_COLS = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home',     to: '/'          },
      { label: 'About',    to: '/#about'    },
      { label: 'Projects', to: '/#projects' },
      { label: 'Resume',   to: '/resume'    },
      { label: 'Contact',  to: '/#contact'  },
    ],
  },
  {
    heading: 'Projects',
    links: [
      { label: 'Career Reach Hub',         to: '/#projects' },
      { label: 'Product Store App',        to: '/#projects' },
      { label: 'Kigali Pizza Company',     to: '/#projects' },
      { label: 'Pharmacy Management',      to: '/#projects' },
    ],
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-border bg-bg-secondary/40"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle top gradient bleed */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-content py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Emmanuel Semaza — Home"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors duration-200">
                <img src="/semaza.jpg" alt="Emmanuel picture" />
              </div>
              <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-200">
                Emmanuel Semaza
              </span>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-6">
              Full-stack developer from Rwanda building scalable software products
              across education, commerce, and operational systems.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.15 }}
                  className={[
                    'flex items-center justify-center w-9 h-9 rounded-lg',
                    'border border-border text-text-tertiary',
                    'hover:border-border-strong hover:text-text-primary hover:bg-white/5',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  ].join(' ')}
                  aria-label={label}
                  role="listitem"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Nav Columns ── */}
          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className={[
                        'text-sm text-text-secondary hover:text-text-primary',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:underline',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="divider mt-12 mb-6" />

        <div className="flex flex-col xs:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-text-tertiary font-mono text-center xs:text-left">
            Designed and Built by{' '}
            <span className="text-text-secondary font-medium">Emmanuel Semaza</span>
            {' '}· © {year}
          </p>

          {/* Status pill */}
          <div className="flex items-center gap-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 rounded-full px-3 py-1"
              aria-label="Currently open to opportunities"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
              Open to opportunities
            </span>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.15 }}
              className={[
                'flex items-center justify-center w-8 h-8 rounded-lg',
                'border border-border text-text-tertiary',
                'hover:border-accent hover:text-accent hover:bg-accent/5',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              ].join(' ')}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}