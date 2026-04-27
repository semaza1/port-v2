import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ImageIcon } from 'lucide-react';

const CATEGORIES = ['All', 'Awards', 'Teaching', 'Events', 'Community'];

// Placeholder colours for empty slots
const PLACEHOLDER_COLORS = [
  'rgba(59,130,246,0.1)', 'rgba(139,92,246,0.1)', 'rgba(16,185,129,0.1)',
  'rgba(245,158,11,0.1)', 'rgba(236,72,153,0.1)', 'rgba(6,182,212,0.1)',
  'rgba(249,115,22,0.1)', 'rgba(161,161,170,0.08)',
];

export default function GalleryGrid({ items }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Gallery categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            role="tab"
            aria-selected={activeCategory === cat}
            className={[
              'px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium border transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              activeCategory === cat
                ? 'bg-accent/10 text-accent border-accent/25'
                : 'bg-transparent text-text-tertiary border-border hover:text-text-secondary hover:border-border-strong',
            ].join(' ')}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => item.src && setLightbox(item)}
              className={[
                'group relative aspect-square rounded-xl overflow-hidden border border-border',
                item.src ? 'cursor-pointer' : 'cursor-default',
              ].join(' ')}
              style={{ background: PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length] }}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                /* Placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-border"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <ImageIcon size={15} className="text-text-tertiary" />
                  </div>
                  <p className="font-mono text-[9px] text-text-tertiary text-center leading-relaxed px-1">
                    {item.caption}
                  </p>
                </div>
              )}

              {/* Hover overlay with caption */}
              {item.src && (
                <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <p className="font-mono text-[10px] text-text-primary leading-snug">{item.caption}</p>
                </div>
              )}

              {/* Category badge */}
              <div className="absolute top-2 right-2 z-10">
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-md bg-black/60 border border-border text-text-tertiary backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/90 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-border shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-primary to-transparent">
                <p className="font-mono text-xs text-text-secondary">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-lg bg-bg-secondary/80 border border-border text-text-secondary hover:text-text-primary backdrop-blur-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close lightbox"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}