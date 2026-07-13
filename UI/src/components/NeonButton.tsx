import { type ReactNode } from 'react';

type NeonButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
};

function NeonButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'md',
  variant = 'primary',
}: NeonButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] active:scale-95',
    secondary:
      'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-95',
    ghost:
      'bg-transparent text-muted hover:text-white hover:bg-white/5 active:scale-95',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg font-medium
        transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default NeonButton;
