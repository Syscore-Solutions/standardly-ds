import type { ReactNode } from 'react'

export interface CalloutProps {
  icon: ReactNode
  title: string
  /** Body content — paragraphs, ordered steps, etc. */
  children: ReactNode
  /** Optional CTA rendered under the body. */
  action?: ReactNode
}
