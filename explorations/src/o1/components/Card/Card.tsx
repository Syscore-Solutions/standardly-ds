import type { CardProps } from './Card.types'
import './Card.css'

export function Card({ title, action, flush = false, className = '', children }: CardProps) {
  return (
    <section className={`o1-card ${className}`}>
      {(title || action) && (
        <header className="o1-card__header">
          {title && <h2 className="o1-h3">{title}</h2>}
          {action && <div className="o1-card__action">{action}</div>}
        </header>
      )}
      <div className={`o1-card__body${flush ? ' o1-card__body--flush' : ''}`}>{children}</div>
    </section>
  )
}
