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
      {/* Image / placeholder area */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}12 0%, rgba(10,10,10,0.5) 100%)` }}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} certificate`}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        ) : (
          <>
            {/* Grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />
            {/* Icon */}
            <div
              className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl border"
              style={{ background: color + '18', borderColor: color + '30', color }}
            >
              <Award size={24} />
            </div>
          </>
        )}

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm"
            style={{ color, background: 'rgba(10,10,10,0.7)', borderColor: color + '35' }}
          >
            {category}
          </span>
        </div>

        {/* Year pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border bg-black/60 border-border text-text-tertiary backdrop-blur-sm">
            {year}
          </span>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
          aria-hidden="true"
        />

        {/* Accent line on hover */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          aria-hidden="true"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-heading font-semibold text-sm text-text-primary mb-1 leading-snug group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="font-mono text-xs text-text-tertiary mb-4 flex-1">{issuer}</p>

        {/* Link */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            style={{ color }}
          >
            <ExternalLink size={12} />
            View Certificate
          </a>
        ) : (
          <span className="text-xs text-text-tertiary font-mono italic">Certificate available on request</span>
        )}
      </div>
    </motion.div>
  );
}