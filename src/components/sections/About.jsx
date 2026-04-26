import { motion } from 'framer-motion';
import { Heart, Code2, Lightbulb, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Data ────────────────────────────────────────────────── */
const TRAITS = [
  {
    icon:  <Code2 size={18} />,
    title: 'Full-Stack Mindset',
    body:  'I work across the entire stack — from database schema to pixel-perfect UI — so nothing gets lost between layers.',
  },
  {
    icon:  <Lightbulb size={18} />,
    title: 'Problem-First Thinking',
    body:  'Every project starts with a real problem. I don\'t build for the sake of building — I build because something needs to exist.',
  },
  {
    icon:  <Users size={18} />,
    title: 'Community Driven',
    body:  'Shaped by the Agahozo-Shalom Youth Village community, I believe technology should serve people — especially those often overlooked.',
  },
  {
    icon:  <Heart size={18} />,
    title: 'Craft Over Speed',
    body:  'I care about clean code, intuitive UX, and maintainable architecture. The details matter as much as the delivery.',
  },
];

const STATS = [
  { value: '5+',  label: 'Projects Shipped'    },
  { value: '3+',  label: 'Years Building'       },
  { value: '4',   label: 'Tech Domains'         },
  { value: '1',   label: 'Country, Global Mindset' },
];

/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Trait card ──────────────────────────────────────────── */
function TraitCard({ icon, title, body }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: 'rgba(59,130,246,0.35)' }}
      transition={{ duration: 0.2 }}
      className="card group"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 text-accent mb-4 group-hover:bg-accent/15 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-base text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {body}
      </p>
    </motion.div>
  );
}

/* ─── Stat item ───────────────────────────────────────────── */
function Stat({ value, label }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center xs:items-start">
      <span
        className="font-heading font-bold text-text-primary leading-none mb-1"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
      >
        {value}
      </span>
      <span className="text-text-tertiary text-xs font-mono uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── About ───────────────────────────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-bg-secondary/30 border-y border-border/50"
    >
      <div className="max-content">

        {/* ── Top: text + image side by side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeader
              tag="about me"
              title={
                <>
                  I Build Software That{' '}
                  <span className="gradient-text-blue">Actually Matters</span>
                </>
              }
              animate={false}   // parent handles animation
            />

            <motion.div variants={fadeLeft} className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                I'm a full-stack developer from Kigali, Rwanda with a focus on
                building software that solves real, tangible problems. I started
                coding not to chase trends — but because I saw gaps: in how
                students access career opportunities, how restaurants manage
                operations, how pharmacies track inventory.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Each project I've shipped is a direct response to a real-world
                inefficiency. I care deeply about the end user — the student
                who needs guidance, the business owner who needs clarity, the
                healthcare worker who needs accuracy.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Beyond code, I serve as a{' '}
                <span className="text-text-primary font-medium">Church Elder</span>
                {' '}at Agahozo-Shalom Youth Village — a community that shaped
                my belief that technology and human connection aren't opposites.
                They're the same mission.
              </p>
            </motion.div>

            {/* CTA inline */}
            <motion.div variants={fadeLeft} className="mt-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-150 group"
              >
                See what I've built
                <svg
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 16 16"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-2xl border border-border bg-bg-secondary overflow-hidden shadow-card">

              {/* Top bar — editor-style */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"   />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"/>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-text-tertiary">about.js</span>
              </div>

              {/* Code snippet visual */}
              <div className="px-5 py-6 font-mono text-xs leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">Emmanuel</span> <span className="text-text-tertiary">= {'{'}</span></p>
                <p className="ml-4"><span className="text-emerald-400">location</span><span className="text-text-tertiary">:</span> <span className="text-amber-300">"Kigali, Rwanda"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-4"><span className="text-emerald-400">role</span><span className="text-text-tertiary">:</span> <span className="text-amber-300">"Full-Stack Developer"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-4"><span className="text-emerald-400">focus</span><span className="text-text-tertiary">:</span> <span className="text-amber-300">"Real-world products"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-4"><span className="text-emerald-400">stack</span><span className="text-text-tertiary">: [</span></p>
                <p className="ml-8"><span className="text-amber-300">"React"</span><span className="text-text-tertiary">,</span> <span className="text-amber-300">"Node.js"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-8"><span className="text-amber-300">"MongoDB"</span><span className="text-text-tertiary">,</span> <span className="text-amber-300">"MySQL"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-8"><span className="text-amber-300">"Tailwind"</span><span className="text-text-tertiary">,</span> <span className="text-amber-300">"Figma"</span></p>
                <p className="ml-4"><span className="text-text-tertiary">],</span></p>
                <p className="ml-4"><span className="text-emerald-400">currentlyBuilding</span><span className="text-text-tertiary">:</span> <span className="text-amber-300">"Pay-to-watch platform"</span><span className="text-text-tertiary">,</span></p>
                <p className="ml-4"><span className="text-emerald-400">available</span><span className="text-text-tertiary">:</span> <span className="text-blue-400">true</span></p>
                <p><span className="text-text-tertiary">{'}'}</span></p>
                {/* Blinking cursor */}
                <p className="mt-2 text-text-tertiary">
                  <span className="inline-block w-2 h-4 bg-accent/80 align-middle animate-pulse" />
                </p>
              </div>
            </div>

            {/* Floating accent badge — top right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary border border-border shadow-card text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span className="text-text-secondary">Open to work</span>
            </motion.div>

            {/* Floating accent badge — bottom left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary border border-border shadow-card text-xs font-mono"
            >
              <span className="text-accent">{'<'}</span>
              <span className="text-text-secondary">Building in public</span>
              <span className="text-accent">{'/>'}</span>
            </motion.div>

            {/* Glow behind card */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)',
                filter: 'blur(24px)',
                transform: 'scale(1.1)',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20 py-8 border-y border-border/50"
        >
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>

        {/* ── Trait cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="section-tag">
              <span className="text-text-tertiary">//</span> what drives me
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRAITS.map((trait) => (
              <TraitCard key={trait.title} {...trait} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}