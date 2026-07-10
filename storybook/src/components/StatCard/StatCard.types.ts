import type { ReactNode } from 'react'
import type { IconTileTone } from '../IconTile'

export interface StatCardProps {
  label: string
  /** Rendered with tabular numerals. */
  value: string
  icon: ReactNode
  tone?: IconTileTone
  /** Small secondary line under the value (e.g. "across 2 projects"). */
  hint?: string
}
