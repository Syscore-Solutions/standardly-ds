import type { EmptyStateProps } from './EmptyState.types'
import './EmptyState.css'

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="o1-empty">
      <span className="o1-empty__icon" aria-hidden="true">
        {icon}
      </span>
      <p className="o1-empty__title">{title}</p>
      {description && <p className="o1-empty__desc">{description}</p>}
      {action && <div className="o1-empty__action">{action}</div>}
    </div>
  )
}
