/**
 * Badge — inline label for tech stacks, status indicators, tags
 *
 * Variants:  default | accent | success | warning | danger | outline
 * Sizes:     sm | md
 * Supports:  dot indicator, icon, removable (onRemove)
 */

const variants = {
  default: [
    'bg-bg-tertiary text-text-secondary',
    'border border-border',
  ].join(' '),

  accent: [
    'bg-accent/10 text-accent',
    'border border-accent/20',
  ].join(' '),

  success: [
    'bg-emerald-500/10 text-emerald-400',
    'border border-emerald-500/20',
  ].join(' '),

  warning: [
    'bg-amber-500/10 text-amber-400',
    'border border-amber-500/20',
  ].join(' '),

  danger: [
    'bg-red-500/10 text-red-400',
    'border border-red-500/20',
  ].join(' '),

  outline: [
    'bg-transparent text-text-tertiary',
    'border border-border hover:border-border-strong',
    'hover:text-text-secondary transition-colors duration-150',
  ].join(' '),
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-xs gap-1.5',
};

const dotColors = {
  default: 'bg-text-tertiary',
  accent:  'bg-accent',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  danger:  'bg-red-400',
  outline: 'bg-text-tertiary',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  icon,
  onRemove,
  className = '',
  ...props
}) {
  return (
    <span
      className={[
        'inline-flex items-center font-mono font-medium rounded-md',
        'leading-none whitespace-nowrap',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...props}
    >
      {/* Dot indicator */}
      {dot && (
        <span
          className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}

      {/* Icon */}
      {icon && (
        <span className="flex-shrink-0 w-3.5 h-3.5" aria-hidden="true">
          {icon}
        </span>
      )}

      {children}

      {/* Remove button */}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="flex-shrink-0 ml-0.5 rounded-sm opacity-60 hover:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-current"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3L3 9M3 3l6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
}