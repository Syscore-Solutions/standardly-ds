import { ChevronRight } from 'lucide-react'
import { IconTile } from '../IconTile'
import type { ActionListItemProps } from './ActionListItem.types'
import './ActionListItem.css'

export function ActionListItem({ icon, tone = 'brand', title, description, ...rest }: ActionListItemProps) {
  return (
    <button type="button" className="o1-actionitem" {...rest}>
      <IconTile icon={icon} tone={tone} size="lg" />
      <span className="o1-actionitem__text">
        <span className="o1-actionitem__title">{title}</span>
        <span className="o1-actionitem__desc">{description}</span>
      </span>
      <ChevronRight className="o1-actionitem__chevron" aria-hidden="true" />
    </button>
  )
}
