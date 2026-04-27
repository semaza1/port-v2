import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function TeachingCard({ role, org, period, color, desc, impact, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -2 }}
      className="group flex gap-4 p-5 rounded-xl border border-border bg-bg-secondary hover:border-border-strong transition-all duration-200"
    >
      {/* Color accent bar */}
      <div
        className="w-1 rounded-full flex-shrink-0 self-stretch"
        style={{ background: color }}
        aria-hidden="true"
      />

      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-200">
              {role}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">{org}</p>
          </div>
          <span className="font-mono text-[10px] text-text-tertiary flex-shrink-0">{period}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary leading-relaxed mb-3">{desc}</p>

        {/* Impact pill */}
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mb-3"
          style={{ color, background: color + '10', borderColor: color + '25' }}
        >
          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
          <span className="font-mono text-[10px] font-medium">{impact}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} variant="default" size="sm">{t}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}