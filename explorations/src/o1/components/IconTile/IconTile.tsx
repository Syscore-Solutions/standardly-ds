import type { IconTileProps } from './IconTile.types'
import './IconTile.css'

export function IconTile({ icon, tone = 'neutral', size = 'md' }: IconTileProps) {
  return (
    <span className={`o1-icontile o1-icontile--${tone} o1-icontile--${size}`} aria-hidden="true">
      {icon}
    </span>
  )
}
