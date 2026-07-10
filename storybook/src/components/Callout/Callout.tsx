import { IconTile } from '../IconTile'
import type { CalloutProps } from './Callout.types'
import './Callout.css'

/** Brand-tinted onboarding/guidance panel (the "Getting Started" surface). */
export function Callout({ icon, title, children, action }: CalloutProps) {
  return (
    <aside className="o1-callout">
      <IconTile icon={icon} tone="brand" size="lg" />
      <div className="o1-callout__content">
        <h2 className="o1-callout__title">{title}</h2>
        <div className="o1-callout__body">{children}</div>
        {action && <div className="o1-callout__action">{action}</div>}
      </div>
    </aside>
  )
}
