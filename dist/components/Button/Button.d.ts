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
export declare function Button({ variant, size, roundness, leftIcon, rightIcon, children, className, disabled, ...props }: ButtonProps): import("react").JSX.Element;
export {};
