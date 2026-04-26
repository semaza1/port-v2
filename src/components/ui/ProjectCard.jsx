import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function ProjectCard({ project, index = 0 }) {
  // Guard — never crash if data isn't ready
  if (!project) return null;

  const {
    title       = '',
    category    = '',
    description = '',
    tech        = [],
    image,
    liveUrl,
    githubUrl,
    status      = 'completed',
    color       = '#3B82F6',
    colorMuted  = 'rgba(59,130,246,0.08)',
    colorBorder = 'rgba(59,130,246,0.2)',
  } = project;

  const isLive = status === 'live';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-bg-secondary overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
      aria-label={`Project: ${title}`}
    >
      {/* ── Image area ── */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-bg-tertiary">

        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder gradient when no image supplied */
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${colorMuted} 0%, rgba(10,10,10,0.6) 100%)` }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div
                className="w-12 h-12 rounded-xl border flex items-center justify-center font-heading font-bold text-xl"
                style={{ background: colorMuted, borderColor: colorBorder, color }}
              >
                {title.charAt(0)}
              </div>
              <span className="font-mono text-xs text-text-tertiary">No preview yet</span>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/30 transition-colors duration-300" />

        {/* ── Two badges — top row ── */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {/* Domain badge — left */}
          <span
            className="inline-flex items-center font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm"
            style={{ color, background: 'rgba(10,10,10,0.65)', borderColor: colorBorder }}
          >
            {category}
          </span>

          {/* Status badge — right */}
          <span
            className={[
              'inline-flex items-center gap-1.5 font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm',
              isLive
                ? 'text-emerald-400 border-emerald-500/30 bg-black/60'
                : 'text-text-tertiary border-border bg-black/60',
            ].join(' ')}
          >
            <span
              className={[
                'w-1.5 h-1.5 rounded-full flex-shrink-0',
                isLive ? 'bg-emerald-400 animate-pulse-slow' : 'bg-text-tertiary',
              ].join(' ')}
              aria-hidden="true"
            />
            {isLive ? 'Live' : 'Completed'}
          </span>
        </div>

        {/* Bottom fade into card body */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
          aria-hidden="true"
        />

        {/* Accent line sweeps on hover */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          aria-hidden="true"
        />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-semibold text-base text-text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((t) => (
            <Badge key={t} variant="default" size="sm">{t}</Badge>
          ))}
        </div>

        <div className="divider mb-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label={`View ${title} on GitHub`}
              >
                <Github size={13} /> Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>

          <motion.a
            href={liveUrl || githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            style={{ color }}
            aria-label={`Open ${title}`}
          >
            View <ArrowRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}