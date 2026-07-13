import { type ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'success' | 'info' | 'warning' | 'default';
  className?: string;
};

const variantStyles = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  info: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  default: 'bg-white/5 text-muted-light border-white/10',
};

function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
