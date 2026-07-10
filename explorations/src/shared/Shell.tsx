import { NavLink, Outlet, useLocation } from 'react-router-dom'

const DIRECTIONS = [
  { id: 'o1', label: 'o1', ready: true },
  { id: 'o2', label: 'o2', ready: false },
  { id: 'o3', label: 'o3', ready: false },
]

/**
 * Shared sprint chrome: a thin top rail with the direction switcher.
 * Styled from PRIMITIVES ONLY — it must stay visually neutral so it never
 * biases the perception of any direction rendered below it.
 */
export function Shell() {
  const { pathname } = useLocation()
  const active = DIRECTIONS.find((d) => pathname.startsWith(`/${d.id}`))

  return (
    <div className="sprint-shell">
      <header className="sprint-rail">
        <NavLink to="/" className="sprint-rail__home">
          standardly-ds <span className="sprint-rail__sep">/</span> sprint S1
        </NavLink>
        <nav className="sprint-rail__nav" aria-label="Design directions">
          {DIRECTIONS.map((d) => (
            <NavLink
              key={d.id}
              to={`/${d.id}`}
              className={({ isActive }) =>
                `sprint-rail__link${isActive || pathname.startsWith(`/${d.id}/`) ? ' is-active' : ''}${d.ready ? '' : ' is-pending'}`
              }
            >
              {d.label}
            </NavLink>
          ))}
        </nav>
        {active?.ready && (
          <nav className="sprint-rail__sub" aria-label="Direction pages">
            <NavLink to={`/${active.id}`} end className={({ isActive }) => `sprint-rail__link${isActive ? ' is-active' : ''}`}>
              demo
            </NavLink>
            <NavLink to={`/${active.id}/styleguide`} className={({ isActive }) => `sprint-rail__link${isActive ? ' is-active' : ''}`}>
              styleguide
            </NavLink>
          </nav>
        )}
      </header>
      <main className="sprint-main">
        <Outlet />
      </main>
    </div>
  )
}
