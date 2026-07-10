import type { ReactNode } from 'react'

export interface CardProps {
  /** Panel title rendered in the card header. */
  title?: ReactNode
  /** Right-aligned header slot (e.g. a link or small button). */
  action?: ReactNode
  /** Remove inner padding on the body (for flush lists). */
  flush?: boolean
  className?: string
  children: ReactNode
}
