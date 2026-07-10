import { ConfidenceMeter } from '../ConfidenceMeter'
import { StatusPill } from '../StatusPill'
import type { ActivityListItemProps } from './ActivityListItem.types'
import './ActivityListItem.css'

export function ActivityListItem({ title, meta, time, status, confidence }: ActivityListItemProps) {
  return (
    <li className="o1-activity">
      <div className="o1-activity__main">
        <span className="o1-activity__title">{title}</span>
        <span className="o1-activity__meta">{meta}</span>
        {confidence !== undefined && (
          <span className="o1-activity__confidence">
            <span className="o1-activity__confidence-label">AI confidence</span>
            <ConfidenceMeter value={confidence} size="sm" />
          </span>
        )}
      </div>
      <div className="o1-activity__side">
        <time className="o1-activity__time o1-num">{time}</time>
        {status && <StatusPill status={status} />}
      </div>
    </li>
  )
}
