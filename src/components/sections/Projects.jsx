import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard   from '@/components/ui/ProjectCard';
import Button        from '@/components/ui/Button';
import { FEATURED }  from '@/data/projects';

/* ─── Dot indicator ───────────────────────────────────────── */
function ScrollDots({ total, scrollRef }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const card = el.querySelector('[data-card]');
      if (!card) return;
      const cardW = card.offsetWidth + 20; // 20 = gap
      const idx   = Math.min(Math.round(el.scrollLeft / cardW), total - 1);
      setActive(idx);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [total, scrollRef]);

  return (
    <div className="flex items-center justify-center gap-1.5 mt-5" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            const el   = scrollRef.current;
            const card = el?.querySelector('[data-card]');
            if (!el || !card) return;
            el.scrollTo({ left: (card.offsetWidth + 20) * i, behavior: 'smooth' });
          }}
          className={[
            'rounded-full transition-all duration-300 border-none cursor-pointer',
            i === active
              ? 'w-5 h-1.5 bg-accent'
              : 'w-1.5 h-1.5 bg-border-strong hover:bg-text-tertiary',
          ].join(' ')}
          aria-label={`Go to project ${i + 1}`}
        />
      ))}
    </div>
  );
}

/* ─── Projects ────────────────────────────────────────────── */
export default function Projects() {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    const el   = scrollRef.current;
    const card = el?.querySelector('[data-card]');
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  // Safety — never render if data is missing
  if (!FEATURED?.length) return null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding"
    >
      <div className="max-content">

        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeader
            tag="featured projects"
            title={<>Things I've <span className="gradient-text-blue">Built</span></>}
            subtitle="A collection of full-stack products solving real problems across education, commerce, and healthcare."
            className="mb-0"
          />

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-bg-secondary text-text-tertiary hover:text-text-primary hover:border-border-strong transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-bg-secondary text-text-tertiary hover:text-text-primary hover:border-border-strong transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>

            <div className="w-px h-6 bg-border mx-1" aria-hidden="true" />

            <Button
              as="a"
              href="https://github.com/emmanuelsemaza"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              iconLeft={<Github size={14} />}
            >
              All Projects
            </Button>
          </div>
        </div>

        {/* ── Scroll track ── */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-3 w-6 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
            aria-hidden="true"
          />
          {/* Right fade — wide to hint next card */}
          <div
            className="absolute right-0 top-0 bottom-3 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A0A0A 30%, transparent)' }}
            aria-hidden="true"
          />

          <ul
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar pb-3"
            style={{ scrollSnapType: 'x mandatory', listStyle: 'none', padding: 0, margin: 0 }}
            aria-label="Project cards"
          >
            {FEATURED.map((project, i) => (
              <li
                key={project.id}
                data-card                         /* used by scrollBy + ScrollDots */
                style={{
                  flex: '0 0 clamp(280px, calc(33.333% - 14px), 400px)',
                  scrollSnapAlign: 'start',
                  listStyle: 'none',
                }}
              >
                {/* Pass project object explicitly — this is what the guard protects */}
                <ProjectCard project={project} index={i} />
              </li>
            ))}
          </ul>
        </div>

        <ScrollDots total={FEATURED.length} scrollRef={scrollRef} />

        {/* ── Currently building strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mt-12 pt-10 border-t border-border/50"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />
            <p className="text-xs font-mono text-text-secondary">
              Currently building:{' '}
              <span className="text-accent font-medium">Pay-to-watch video platform</span>
              {' '}with payment integration
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}