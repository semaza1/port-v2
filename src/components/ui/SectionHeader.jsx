import { motion } from 'framer-motion';

/**
 * SectionHeader — consistent heading block used across all sections
 *
 * Props:
 *   tag      — small mono label above heading  e.g. "// about"
 *   title    — main heading (supports JSX for gradient words)
 *   subtitle — body copy below heading
 *   align    — 'left' | 'center' (default: 'left')
 *   size     — 'sm' | 'md' | 'lg' (default: 'md')
 *   animate  — enable entrance animation (default: true)
 */

const alignClass = {
  left:   'items-start text-left',
  center: 'items-center text-center',
};

const titleSize = {
  sm: 'text-2xl sm:text-3xl',
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'left',
  size = 'md',
  animate = true,
  className = '',
}) {
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? { variants: containerVariants, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.3 } }
    : {};

  const Item = animate ? motion.div : 'div';
  const itemProps = animate ? { variants: itemVariants } : {};

  return (
    <Wrapper
      className={`flex flex-col gap-3 mb-12 ${alignClass[align]} ${className}`}
      {...wrapperProps}
    >
      {/* Tag — mono label */}
      {tag && (
        <Item {...itemProps}>
          <span className="section-tag" aria-hidden="true">
            <span className="text-text-tertiary select-none">//</span>
            {tag}
          </span>
        </Item>
      )}

      {/* Title */}
      {title && (
        <Item {...itemProps}>
          <h2
            className={[
              'font-heading font-semibold leading-tight tracking-tight',
              'text-text-primary',
              titleSize[size],
            ].join(' ')}
          >
            {title}
          </h2>
        </Item>
      )}

      {/* Subtitle */}
      {subtitle && (
        <Item {...itemProps}>
          <p
            className={[
              'text-text-secondary leading-relaxed',
              'text-base sm:text-lg',
              align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl',
            ].join(' ')}
          >
            {subtitle}
          </p>
        </Item>
      )}
    </Wrapper>
  );
}