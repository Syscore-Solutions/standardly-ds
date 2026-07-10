import type { ReactNode } from 'react'

export type IconTileTone = 'brand' | 'success' | 'info' | 'neutral'
export type IconTileSize = 'md' | 'lg'

export interface IconTileProps {
  icon: ReactNode
  /** o1 renders tiles TINTED (50/100 bg + 700 icon), not solid like the prototype. */
  tone?: IconTileTone
  size?: IconTileSize
}
