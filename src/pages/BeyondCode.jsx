import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, FlaskConical, Users, Images } from 'lucide-react';
import SectionHeader  from '@/components/ui/SectionHeader';
import CertCard       from '@/components/beyond/CertCard';
import MathCard       from '@/components/beyond/MathCard';
import TeachingCard   from '@/components/beyond/TeachingCard';
import GalleryGrid    from '@/components/beyond/GalleryGrid';
import {
  CERTIFICATIONS,
  MATH_HIGHLIGHTS,
  TEACHING_ITEMS,
  GALLERY_ITEMS,
} from '@/data/beyond';

/* ─── Scroll to anchor on load ────────────────────────────── */
function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);
}

/* ─── Section wrapper ─────────────────────────────────────── */
function Section({ id, children, alt }) {
  return (
    <section
      id={id}
      className={[
        'section-padding',
        alt ? 'bg-bg-secondary/20 border-y border-border/50' : '',
      ].join(' ')}
    >
      <div className="max-content">{children}</div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function BeyondCode() {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-bg-primary">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-28 flex flex-col items-center text-center border-b border-border">

        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 20%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 20%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 max-w-2xl"
        >
          {/* Tag */}
          <div className="flex justify-center mb-6">
            <span className="section-tag">
              <span className="text-text-tertiary">//</span> beyond code
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-semibold leading-[1.1] tracking-tight text-text-primary mb-5"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
          >
            Beyond{' '}
            <span className="gradient-text-blue">Code</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Exploring learning, curiosity, teaching, and growth beyond software development.
          </p>

          {/* Section jump pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'Certifications',       href: '#certifications', icon: <Award size={12} />,        color: '#3B82F6' },
              { label: 'Math & Physics',        href: '#math-physics',   icon: <FlaskConical size={12} />, color: '#8B5CF6' },
              { label: 'Teaching & Mentorship', href: '#teaching',       icon: <Users size={12} />,        color: '#10B981' },
              { label: 'Gallery',               href: '#gallery',        icon: <Images size={12} />,       color: '#EC4899' },
            ].map(({ label, href, icon, color }) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-150 text-xs font-mono font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span style={{ color }}>{icon}</span>
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          CERTIFICATIONS
      ════════════════════════════════════════ */}
      <Section id="certifications">
        <SectionHeader
          tag="certifications"
          title={<>Courses & <span className="gradient-text-blue">Credentials</span></>}
          subtitle="Self-directed learning through online platforms — building skills beyond the classroom."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════
          MATH & PHYSICS
      ════════════════════════════════════════ */}
      <Section id="math-physics" alt>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeader
              tag="math & physics"
              title={<>Analytical <span className="gradient-text-blue">Thinking</span></>}
              subtitle="Mathematics and physics are more than subjects — they're a way of thinking. Pattern recognition, abstract reasoning, and first-principles problem-solving flow directly into how I architect software."
              animate={false}
            />

            {/* Mindset callout */}
            <div className="p-5 rounded-xl border border-accent/20 bg-accent/5 mt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                How it shapes my code
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Algorithm Design',      note: 'Complexity analysis drawn from calculus and combinatorics'      },
                  { label: 'System Modelling',      note: 'Differential equations inform how I think about state and change' },
                  { label: 'Data Reasoning',        note: 'Statistics and probability for smarter product decisions'          },
                  { label: 'Debugging Mindset',     note: 'Physics\'s hypothesis-test loop mirrors systematic debugging'      },
                ].map(({ label, note }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-xs font-medium text-text-primary">{label}</p>
                      <p className="text-xs text-text-tertiary">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — subject cards */}
          <div className="grid grid-cols-1 gap-3">
            {MATH_HIGHLIGHTS.map((item, i) => (
              <MathCard key={item.subject} {...item} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          TEACHING & MENTORSHIP
      ════════════════════════════════════════ */}
      <Section id="teaching">
        <SectionHeader
          tag="teaching & mentorship"
          title={<>Helping Others <span className="gradient-text-blue">Grow</span></>}
          subtitle="Some of the most meaningful work I've done isn't in a codebase — it's in the moment a student writes their first function, or when a mentee finds their direction."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {TEACHING_ITEMS.map((item, i) => (
            <TeachingCard key={item.role + item.org} {...item} index={i} />
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-6 rounded-2xl border border-border bg-bg-secondary text-center"
        >
          <p className="font-heading text-lg text-text-primary italic mb-3 leading-relaxed">
            "The best way to learn something deeply is to teach it."
          </p>
          <p className="font-mono text-xs text-text-tertiary">
            A principle I live by — at Byte Builders, in mentorship, and in code reviews.
          </p>
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════
          GALLERY
      ════════════════════════════════════════ */}
      <Section id="gallery" alt>
        <SectionHeader
          tag="gallery"
          title={<>Moments & <span className="gradient-text-blue">Memories</span></>}
          subtitle="Photos from events, teaching sessions, competitions, and community activities."
        />
        <GalleryGrid items={GALLERY_ITEMS} />

        {/* Upload hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 rounded-xl border border-dashed border-border/60 text-center"
        >
          <p className="font-mono text-xs text-text-tertiary">
            Drop your photos into{' '}
            <span className="text-accent">public/assets/gallery/</span>
            {' '}and update the{' '}
            <span className="text-accent">src</span>
            {' '}field in{' '}
            <span className="text-accent">src/data/beyond.js</span>
          </p>
        </motion.div>
      </Section>

    </div>
  );
}