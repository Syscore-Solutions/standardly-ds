import { IconTile } from '../IconTile'
import type { StatCardProps } from './StatCard.types'
import './StatCard.css'

export function StatCard({ label, value, icon, tone = 'neutral', hint }: StatCardProps) {
  return (
    <div className="o1-statcard">
      <IconTile icon={icon} tone={tone} />
      <div className="o1-statcard__text">
        <span className="o1-statcard__label">{label}</span>
        <span className="o1-statcard__value o1-num">{value}</span>
        {hint && <span className="o1-statcard__hint">{hint}</span>}
      </div>
    </div>
  )
}
