import { motion } from 'framer-motion';

export default function MathCard({ subject, icon, color, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3, borderColor: color + '40' }}
      className="group flex gap-4 p-5 rounded-xl border border-border bg-bg-secondary transition-all duration-200"
    >
      {/* Symbol */}
      <div
        className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border font-heading font-bold text-lg"
        style={{ background: color + '12', borderColor: color + '25', color }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="font-heading font-semibold text-sm text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-200">
          {subject}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}