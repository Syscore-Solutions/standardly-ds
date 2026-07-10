import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { IconTileTone } from '../IconTile'

export interface ActionListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  tone?: IconTileTone
  title: string
  description: string
}
