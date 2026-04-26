import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

/* ─── Contact links ───────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    id:      'github',
    label:   'GitHub',
    handle:  '@emmanuelsemaza',
    href:    'https://github.com/semaza1',
    icon:    <Github size={18} />,
    desc:    'See my code and open-source work',
    color:   '#A1A1AA',
    colorBg: 'rgba(161,161,170,0.08)',
  },
  {
    id:      'linkedin',
    label:   'LinkedIn',
    handle:  'Emmanuel Semaza',
    href:    'https://linkedin.com/in/emmanuelsemaza',
    icon:    <Linkedin size={18} />,
    desc:    'Connect professionally',
    color:   '#0A66C2',
    colorBg: 'rgba(10,102,194,0.08)',
  },
  {
    id:      'email',
    label:   'Email',
    handle:  'semazaemmanuel@gmail.com',
    href:    'mailto:semazaemmanuel@gmail.com',
    icon:    <Mail size={18} />,
    desc:    'Best for project inquiries',
    color:   '#3B82F6',
    colorBg: 'rgba(59,130,246,0.08)',
  },
];

/* ─── Variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Email copy button ───────────────────────────────────── */
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const EMAIL = 'semazaemmanuel@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mail client
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.96 }}
      className={[
        'inline-flex items-center gap-2 px-3.5 py-2 rounded-lg',
        'font-mono text-xs border transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        copied
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          : 'bg-bg-tertiary border-border text-text-tertiary hover:text-text-primary hover:border-border-strong',
      ].join(' ')}
      aria-label={copied ? 'Email copied!' : 'Copy email address'}
    >
      {copied
        ? <><Check size={12} /> Copied!</>
        : <><Copy size={12} /> Copy email</>
      }
    </motion.button>
  );
}

/* ─── Social card ─────────────────────────────────────────── */
function SocialCard({ label, handle, href, icon, desc, color, colorBg }) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -3, borderColor: color + '40' }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-secondary hover:bg-bg-tertiary/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`${label}: ${handle}`}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-200"
        style={{ background: colorBg, borderColor: color + '30', color }}
      >
        {icon}
      </div>F

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-0.5">
          {label}
        </p>
        <p className="font-medium text-sm text-text-primary truncate">{handle}</p>
        <p className="text-xs text-text-tertiary">{desc}</p>
      </div>

      {/* Arrow */}
      <motion.div
        className="flex-shrink-0 text-text-tertiary group-hover:text-text-primary transition-colors duration-150"
        whileHover={{ x: 2 }}
      >
        <ArrowRight size={15} />
      </motion.div>
    </motion.a>
  );
}

/* ─── Contact ─────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-bg-secondary/20 border-t border-border/50"
    >
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — heading + CTA ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeader
              tag="contact"
              title={
                <>
                  Let's Build{' '}
                  <span className="gradient-text-blue">Something</span>
                </>
              }
              subtitle="I'm currently open to new projects, collaborations, and opportunities. Whether you have a product idea, need a developer, or just want to say hi — my inbox is open."
              animate={false}
            />

            {/* Availability status */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
                <span className="font-mono text-xs text-emerald-400 font-medium">Available for work</span>
              </div>
              <span className="text-xs text-text-tertiary">· Responds within 24h</span>
            </motion.div>

            {/* Primary CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
              <Button
                as="a"
                href="mailto:emmanuelsemaza@gmail.com"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={16} />}
              >
                Send an Email
              </Button>
              <CopyEmail />
            </motion.div>
          </motion.div>

          {/* ── Right — social cards ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {SOCIAL_LINKS.map((link) => (
              <SocialCard key={link.id} {...link} />
            ))}

            {/* Location note */}
            <motion.div
              variants={fadeUp}
              className="flex items-start gap-3 mt-2 p-4 rounded-xl border border-border/50 bg-bg-secondary/50"
            >
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-text-tertiary" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary mb-0.5">Based in Kigali, Rwanda</p>
                <p className="text-xs text-text-tertiary leading-relaxed">
                  Open to remote work globally. Available for on-site roles in Rwanda and East Africa.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}