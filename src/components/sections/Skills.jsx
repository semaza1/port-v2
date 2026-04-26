import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, PenTool } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SKILL_GROUPS } from '@/data/skills';

/* ─── Icon map ────────────────────────────────────────────── */
const ICONS = {
  monitor:    <Monitor  size={16} />,
  server:     <Server   size={16} />,
  'pen-tool': <PenTool  size={16} />,
};

/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Skill bar row ───────────────────────────────────────── */
function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group"
    >
      {/* Label row */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {/* Color dot */}
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: color, boxShadow: `0 0 5px ${color}60` }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-150">
            {name}
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-tertiary tabular-nums">
          {level}%
        </span>
      </div>

      {/* Bar track */}
      <div
        className="h-1 w-full rounded-full bg-bg-tertiary border border-border/50 overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        >
          {/* Shine effect */}
          <span
            className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.15))' }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Tab button ──────────────────────────────────────────── */
function TabButton({ group, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={[
        'relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium',
        'transition-colors duration-150 focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-accent',
        isActive
          ? 'text-text-primary bg-bg-tertiary border border-border-strong'
          : 'text-text-tertiary hover:text-text-secondary hover:bg-white/[0.03] border border-transparent',
      ].join(' ')}
      aria-pressed={isActive}
    >
      <span className={isActive ? 'text-accent' : 'text-text-tertiary'}>
        {ICONS[group.icon]}
      </span>
      {group.label}
      {isActive && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute inset-0 rounded-lg border border-accent/20 bg-accent/5"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
}

/* ─── Skills ──────────────────────────────────────────────── */
export default function Skills() {
  const [activeTab, setActiveTab] = useState(SKILL_GROUPS[0].id);

  const activeGroup = SKILL_GROUPS.find((g) => g.id === activeTab);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding bg-bg-secondary/20 border-y border-border/50"
    >
      <div className="max-content">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            tag="skills"
            title={
              <>
                My{' '}
                <span className="gradient-text-blue">Tech Stack</span>
              </>
            }
            subtitle="Tools and technologies I use to design and ship production-grade software."
            className="mb-0"
          />

          {/* Tabs — desktop */}
          <div
            className="hidden sm:flex items-center gap-2 p-1 rounded-xl bg-bg-tertiary/50 border border-border flex-shrink-0"
            role="tablist"
            aria-label="Skill categories"
          >
            {SKILL_GROUPS.map((group) => (
              <TabButton
                key={group.id}
                group={group}
                isActive={activeTab === group.id}
                onClick={() => setActiveTab(group.id)}
              />
            ))}
          </div>
        </div>

        {/* Tabs — mobile (full width) */}
        <div
          className="flex sm:hidden gap-2 mb-8 p-1 rounded-xl bg-bg-tertiary/50 border border-border"
          role="tablist"
          aria-label="Skill categories"
        >
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={[
                'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all duration-150',
                activeTab === group.id
                  ? 'bg-bg-secondary text-text-primary border border-border-strong'
                  : 'text-text-tertiary hover:text-text-secondary',
              ].join(' ')}
              aria-pressed={activeTab === group.id}
            >
              <span>{ICONS[group.icon]}</span>
              {group.label}
            </button>
          ))}
        </div>

        {/* ── Main content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — animated skill bars */}
          <div
            className="rounded-2xl border border-border bg-bg-secondary p-6 sm:p-8"
            role="tabpanel"
            aria-label={`${activeGroup?.label} skills`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Panel header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 text-accent flex-shrink-0">
                    {ICONS[activeGroup?.icon]}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-text-primary">
                      {activeGroup?.label}
                    </h3>
                    <p className="font-mono text-[10px] text-text-tertiary">
                      {activeGroup?.skills.length} technologies
                    </p>
                  </div>
                  {/* Tag */}
                  <span className="ml-auto font-mono text-xs text-text-tertiary bg-bg-tertiary border border-border rounded px-2 py-0.5">
                    {activeGroup?.tag}
                  </span>
                </div>

                {/* Skill bars */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-5"
                >
                  {activeGroup?.skills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} index={i} />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — all skills as badge cloud + currently learning */}
          <div className="flex flex-col gap-6">

            {/* All skills badge cloud */}
            <div className="rounded-2xl border border-border bg-bg-secondary p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-5">
                Full stack at a glance
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {SKILL_GROUPS.flatMap((g) => g.skills).map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-bg-tertiary font-mono text-xs text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-150 cursor-default"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: skill.color }}
                      aria-hidden="true"
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Currently learning / building
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-accent/20 bg-accent/5 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Currently deepening
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'TypeScript',         note: 'Type-safe full-stack apps'       },
                  { name: 'Payment Integration', note: 'Stripe, Flutterwave, MTN MoMo'  },
                  { name: 'Video Streaming',     note: 'HLS, adaptive bitrate delivery' },
                  { name: 'System Design',       note: 'Scalable architecture patterns' },
                ].map(({ name, note }) => (
                  <div key={name} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-xs font-medium text-text-primary">{name}</p>
                      <p className="text-xs text-text-tertiary">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div> */}

          </div>
        </div>

      </div>
    </section>
  );
}