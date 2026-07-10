import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'
import './Button.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, children, className = '', ...rest },
  ref,
) {
  return (
    <button ref={ref} className={`o1-btn o1-btn--${variant} o1-btn--${size} ${className}`} {...rest}>
      {icon && (
        <span className="o1-btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
})
