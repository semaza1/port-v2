import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

export default function CertCard({ cert, index }) {
  const { title, issuer, year, category, color, link, image } = cert;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-bg-secondary overflow-hidden hover:border-border-strong transition-all duration-300"
    >
      {/* ── Image area ── */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          /* Tall enough for landscape certificate screenshots */
          height: '200px',
          background: `linear-gradient(135deg, ${color}14 0%, rgba(10,10,10,0.6) 100%)`,
        }}
      >
        {image ? (
          /*
           * object-cover   → always fills the box, no letter-boxing
           * object-top     → anchors to the top of the image so the
           *                   title/header of the certificate is always
           *                   visible even if the bottom is cropped
           * group-hover:scale-105 → subtle zoom on card hover
           */
          <img
            src={image}
            alt={`${title} certificate`}
            className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{
              objectFit:      'cover',
              objectPosition: 'top center',
            }}
            loading="lazy"
          />
        ) : (
          /* Placeholder — shown when no image is provided yet */
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl border"
              style={{ background: color + '18', borderColor: color + '30', color }}
            >
              <Award size={28} />
            </div>
          </>
        )}

        {/* Dark scrim over image so badges are always readable */}
        {image && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Category pill — top left */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md"
            style={{
              color,
              background:  'rgba(10,10,10,0.72)',
              borderColor: color + '40',
            }}
          >
            {category}
          </span>
        </div>

        {/* Year pill — top right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border bg-black/65 border-border/60 text-text-tertiary backdrop-blur-md">
            {year}
          </span>
        </div>

        {/* Coloured accent line sweeps on hover */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          aria-hidden="true"
        />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-heading font-semibold text-sm text-text-primary mb-1 leading-snug group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="font-mono text-xs text-text-tertiary mb-4 flex-1">{issuer}</p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded w-fit"
            style={{ color }}
          >
            <ExternalLink size={12} />
            View Certificate
          </a>
        ) : (
          <span className="text-xs text-text-tertiary font-mono italic">
            Certificate available on request
          </span>
        )}
      </div>
    </motion.div>
  );
}