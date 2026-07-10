import { ChevronDown, LogOut } from 'lucide-react'
import { ModelSelect } from '../ModelSelect'
import type { TopNavProps } from './TopNav.types'
import './TopNav.css'

function Wordmark() {
  return (
    <span className="o1-topnav__wordmark">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--color-action-primary)" />
        <path
          d="M9 19l7-7 7 7"
          stroke="var(--color-text-on-brand)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9 25l7-7 7 7"
          stroke="var(--color-text-on-brand)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.45"
        />
      </svg>
      standardly
    </span>
  )
}

export function TopNav({ items, activeId, userName, model, onNavigate }: TopNavProps) {
  return (
    <header className="o1-topnav">
      <Wordmark />
      <nav className="o1-topnav__nav" aria-label="Primary">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`o1-topnav__link${item.id === activeId ? ' is-active' : ''}`}
            aria-current={item.id === activeId ? 'page' : undefined}
            onClick={() => onNavigate?.(item.id)}
          >
            {item.label}
            {item.hasMenu && <ChevronDown className="o1-topnav__link-chevron" aria-hidden="true" />}
          </button>
        ))}
      </nav>
      <div className="o1-topnav__right">
        <ModelSelect model={model} />
        <span className="o1-topnav__user">
          <span className="o1-topnav__avatar" aria-hidden="true">
            {userName.charAt(0)}
          </span>
          {userName}
        </span>
        <button type="button" className="o1-topnav__iconbtn" aria-label="Sign out">
          <LogOut aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
