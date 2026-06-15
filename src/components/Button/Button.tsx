import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type Size = 'mini' | 'sm' | 'default' | 'lg';
type Roundness = 'default' | 'round';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  roundness?: Roundness;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'default',
  roundness = 'default',
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    roundness === 'round' ? 'btn--round' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {leftIcon && <span className="btn-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="btn-icon">{rightIcon}</span>}
    </button>
  );
}
