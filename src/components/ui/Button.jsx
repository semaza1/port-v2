import { motion } from 'framer-motion';

/**
 * Button — reusable CTA component
 *
 * Variants:  primary | secondary | ghost | outline
 * Sizes:     sm | md | lg
 * Supports:  icon left/right, loading state, as="a" for links
 */

const variants = {
  primary: [
    'bg-accent text-white',
    'hover:bg-accent-hover',
    'shadow-glow-sm hover:shadow-glow-md',
    'border border-accent/30',
  ].join(' '),

  secondary: [
    'bg-bg-secondary text-text-primary',
    'hover:bg-bg-tertiary',
    'border border-border hover:border-border-strong',
    'shadow-inner-top',
  ].join(' '),

  ghost: [
    'bg-transparent text-text-secondary',
    'hover:text-text-primary hover:bg-white/5',
    'border border-transparent hover:border-border',
  ].join(' '),

  outline: [
    'bg-transparent text-accent',
    'hover:bg-accent-glow',
    'border border-accent/40 hover:border-accent',
  ].join(' '),
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const isDisabled = disabled || loading;

  const base = [
    'inline-flex items-center justify-center',
    'font-body font-medium rounded-lg',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-accent focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg-primary',
    'select-none cursor-pointer',
    isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
  ].join(' ');

  return (
    <motion.div
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="inline-flex"
    >
      <Tag
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={Tag === 'button' ? isDisabled : undefined}
        aria-disabled={isDisabled}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-0.5 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}

        {/* Left icon */}
        {!loading && iconLeft && (
          <span className="flex-shrink-0" aria-hidden="true">
            {iconLeft}
          </span>
        )}

        {children}

        {/* Right icon */}
        {iconRight && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </Tag>
    </motion.div>
  );
}