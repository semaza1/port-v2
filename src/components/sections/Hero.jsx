import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Badge  from '@/components/ui/Badge';

/* ─── Tech stack data ─────────────────────────────────────── */
const TECH_CARDS = [
  { label: 'React.js',   color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',   border: 'rgba(97,218,251,0.2)',   x: -210, y: -80,  delay: 0,    rotate: -6 },
  { label: 'Node.js',    color: '#8CC84B', bg: 'rgba(140,200,75,0.08)',   border: 'rgba(140,200,75,0.2)',   x:  190, y: -100, delay: 0.15, rotate:  5 },
  { label: 'MongoDB',    color: '#47A248', bg: 'rgba(71,162,72,0.08)',    border: 'rgba(71,162,72,0.2)',    x: -230, y:  60,  delay: 0.3,  rotate: -4 },
  { label: 'Tailwind',   color: '#38BDF8', bg: 'rgba(56,189,248,0.08)',   border: 'rgba(56,189,248,0.2)',   x:  205, y:  50,  delay: 0.1,  rotate:  7 },
  { label: 'TypeScript', color: '#3178C6', bg: 'rgba(49,120,198,0.08)',   border: 'rgba(49,120,198,0.2)',   x: -170, y:  155, delay: 0.45, rotate: -3 },
  { label: 'Express.js', color: '#A1A1AA', bg: 'rgba(161,161,170,0.06)',  border: 'rgba(161,161,170,0.15)', x:  170, y:  145, delay: 0.25, rotate:  4 },
  { label: 'MySQL',      color: '#F29111', bg: 'rgba(242,145,17,0.08)',   border: 'rgba(242,145,17,0.2)',   x:    0, y: -140, delay: 0.35, rotate:  2 },
  { label: 'Figma',      color: '#F24E1E', bg: 'rgba(242,78,30,0.08)',    border: 'rgba(242,78,30,0.2)',    x:    0, y:  200, delay: 0.2,  rotate: -2 },
];

/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Card pop-in — used only on outer wrapper via variants
const cardPopIn = (delay, rotate) => ({
  hidden:  { opacity: 0, scale: 0.6, rotate: 0 },
  visible: {
    opacity: 1, scale: 1, rotate,
    transition: { duration: 0.55, delay: 0.9 + delay, ease: [0.34, 1.56, 0.64, 1] },
  },
});

/* ─── TechCard ────────────────────────────────────────────── */
// Two-layer approach: outer handles pop-in via variants,
// inner handles the float loop via its own animate prop.
// Keeping them separate prevents Framer Motion's animate
// from overriding the propagated variant state.
function TechCard({ label, color, bg, border, x, y, delay, rotate, reducedMotion }) {
  return (
    <motion.div
      variants={cardPopIn(delay, rotate)}
      style={{
        position:  'absolute',
        left:      `calc(50% + ${x}px)`,
        top:       `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={reducedMotion ? {} : { y: [0, -9, 0] }}
        transition={{
          duration:   3.5 + delay * 2,
          repeat:     Infinity,
          repeatType: 'loop',
          ease:       'easeInOut',
          delay:      delay * 1.2,
        }}
        style={{
          background: bg,
          border:     `1px solid ${border}`,
          rotate:     `${rotate}deg`,
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm shadow-card cursor-default select-none"
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
        />
        <span className="font-mono text-xs font-medium whitespace-nowrap" style={{ color }}>
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Glow keyframes — injected once */}
      <style>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(14px); }
        }
      `}</style>

      {/* ── Background glows ── */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0">
        <div className="absolute rounded-full" style={{
          width: 700, height: 700, top: '5%', left: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'heroFloat1 8s ease-in-out infinite',
        }} />
        <div className="absolute rounded-full" style={{
          width: 500, height: 500, bottom: '5%', left: '5%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'heroFloat2 10s ease-in-out 2s infinite',
        }} />
        <div className="absolute rounded-full" style={{
          width: 400, height: 400, top: '5%', right: '5%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'heroFloat3 12s ease-in-out 4s infinite',
        }} />

        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }} />
      </div>

      {/* ── Floating tech cards — desktop only ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full"
        >
          {TECH_CARDS.map((card) => (
            <TechCard key={card.label} {...card} reducedMotion={reducedMotion} />
          ))}
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants} className="mb-5">
          <Badge variant="default" className="gap-1.5">
            <MapPin size={10} className="text-text-tertiary" />
            <span className="text-text-tertiary">Kigali, Rwanda</span>
          </Badge>
        </motion.div>

        {/* Status pill */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading font-semibold leading-[1.1] tracking-tight text-text-primary mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)' }}
        >
          Building Full-Stack Products{' '}
          <br className="hidden sm:block" />
          That <span className="gradient-text-blue">Solve Real Problems</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
        >
          I'm{' '}
          <span className="text-text-primary font-medium">Emmanuel Semaza</span>
          , a developer from Rwanda focused on building scalable applications
          across education, commerce, and operational systems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col xs:flex-row items-center gap-3 mb-16">
          <Button
            as="a"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="primary"
            size="lg"
            iconRight={<ArrowRight size={16} />}
          >
            View Projects
          </Button>

          <Button
            as={Link}
            to="/resume"
            variant="secondary"
            size="lg"
            iconLeft={<FileText size={15} />}
          >
            Resume
          </Button>
        </motion.div>

        {/* Tech pills — mobile only */}
        <motion.div
          variants={itemVariants}
          className="lg:hidden flex flex-wrap justify-center gap-2 mb-12"
          aria-label="Tech stack"
        >
          {TECH_CARDS.map(({ label, color, bg, border }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
              style={{ background: bg, border: `1px solid ${border}`, color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-text-tertiary"
          aria-hidden="true"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-border to-transparent rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
        aria-hidden="true"
      />
    </section>
  );
}