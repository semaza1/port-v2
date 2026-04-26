import { motion } from 'framer-motion';
import { Play, ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

/* ─── Feature list ────────────────────────────────────────── */
const FEATURES = [
  {
    icon:  <Play size={15} />,
    title: 'Pay-to-Watch System',
    desc:  'Users pay to unlock individual videos or subscribe to content bundles. Secure access control per content item.',
    status: 'In Progress',
  },
  {
    icon:  <CreditCard size={15} />,
    title: 'Payment Integration',
    desc:  'Integrating Stripe and MTN Mobile Money for local and international payments — making it accessible across Rwanda and beyond.',
    status: 'In Progress',
  },
  {
    icon:  <ShoppingBag size={15} />,
    title: 'E-Commerce Layer',
    desc:  'Future phase adds a product store alongside the video platform — one unified system for digital and physical goods.',
    status: 'Planned',
  },
];

/* ─── Tech being used ─────────────────────────────────────── */
const PLATFORM_TECH = ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'MTN MoMo', 'JWT', 'HLS.js', 'Tailwind CSS'];

/* ─── Variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeLeft = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function CurrentFocus() {
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="section-padding"
    >
      <div className="max-content">

        {/* ── Header ── */}
        <SectionHeader
          tag="current focus"
          title={
            <>
              What I'm{' '}
              <span className="gradient-text-blue">Building Now</span>
            </>
          }
          subtitle="My current project pushes into new technical territory — video delivery, payment systems, and multi-revenue e-commerce."
        />

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — platform card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Platform preview card */}
            <div className="relative rounded-2xl border border-border bg-bg-secondary overflow-hidden">

              {/* Card header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-bg-tertiary/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"    />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"  />
                  </div>
                  <span className="font-mono text-xs text-text-tertiary ml-1">stream-platform.js</span>
                </div>
                <Badge variant="warning" dot size="sm">In Development</Badge>
              </div>

              {/* Fake UI preview */}
              <div className="p-5">
                {/* Video thumbnail grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {[
                    { locked: false, color: 'rgba(59,130,246,0.15)',  label: 'Episode 1' },
                    { locked: true,  color: 'rgba(139,92,246,0.15)',  label: 'Episode 2' },
                    { locked: true,  color: 'rgba(245,158,11,0.15)',  label: 'Episode 3' },
                  ].map(({ locked, color, label }) => (
                    <div
                      key={label}
                      className="aspect-video rounded-lg flex flex-col items-center justify-center gap-1.5 border border-border relative overflow-hidden"
                      style={{ background: color }}
                    >
                      {locked ? (
                        <>
                          <svg className="w-4 h-4 text-text-tertiary" fill="none" viewBox="0 0 24 24">
                            <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                            <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                          </svg>
                          <span className="text-[9px] font-mono text-text-tertiary">Locked</span>
                        </>
                      ) : (
                        <>
                          <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                            <Play size={10} className="text-accent ml-0.5" />
                          </div>
                          <span className="text-[9px] font-mono text-accent">Playing</span>
                        </>
                      )}
                      <span className="absolute bottom-1 left-1 right-1 text-center text-[8px] font-mono text-text-tertiary">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Payment row */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-bg-tertiary border border-border mb-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0">
                    <CreditCard size={13} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs text-text-primary font-medium">Unlock Full Access</p>
                    <p className="font-mono text-[10px] text-text-tertiary">Stripe · MTN MoMo · Card</p>
                  </div>
                  <div className="flex-shrink-0 bg-accent text-white text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg">
                    Pay Now
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-text-tertiary">Build Progress</span>
                    <span className="font-mono text-[10px] text-accent">65%</span>
                  </div>
                  <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden border border-border/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-gradient-to-r from-accent/70 to-accent rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(59,130,246,0.04), transparent)' }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right — feature list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            {FEATURES.map(({ icon, title, desc, status }) => (
              <motion.div
                key={title}
                variants={fadeRight}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex gap-4 p-4 rounded-xl border border-border bg-bg-secondary hover:border-accent/30 transition-colors duration-200"
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/15 transition-colors duration-200">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-sm text-text-primary">
                      {title}
                    </h3>
                    <Badge
                      variant={status === 'Planned' ? 'default' : 'warning'}
                      size="sm"
                      dot
                    >
                      {status}
                    </Badge>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Tech being used */}
            <motion.div variants={fadeUp} className="pt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-3">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {PLATFORM_TECH.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg bg-bg-tertiary border border-border text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}