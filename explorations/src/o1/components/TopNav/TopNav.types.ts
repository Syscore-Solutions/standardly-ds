export interface TopNavItem {
  id: string
  label: string
  /** Renders a chevron hinting a dropdown (visual only — sprint scope). */
  hasMenu?: boolean
}

export interface TopNavProps {
  items: TopNavItem[]
  activeId: string
  /** e.g. "Naman" — renders the greeting + avatar cluster. */
  userName: string
  /** AI model shown in the ModelSelect, e.g. "Claude Sonnet 4.5". */
  model: string
  onNavigate?: (id: string) => void
}
