import { Link } from 'react-router-dom'

const CARDS = [
  {
    id: 'o1',
    name: 'o1 — Soft Precision',
    blurb:
      'Warm, approachable infrastructure. Generous radius, quiet slate surfaces, purple spent only where a decision happens.',
    ready: true,
  },
  {
    id: 'o2',
    name: 'o2 — (to be defined)',
    blurb: 'Direction research pending (S1-T03).',
    ready: false,
  },
  {
    id: 'o3',
    name: 'o3 — (to be defined)',
    blurb: 'Direction research pending (S1-T03).',
    ready: false,
  },
]

export function SprintIndex() {
  return (
    <div className="sprint-index">
      <h1>Design-Direction Explorations</h1>
      <p className="sprint-index__lede">
        Sprint S1 · three directions on the locked token foundation. Primitives are fixed; each
        direction differs only by its <code>semantic.css</code> remap, component styling, and
        composition. Team call 2026-07-14.
      </p>
      <div className="sprint-index__grid">
        {CARDS.map((c) => (
          <div key={c.id} className={`sprint-index__card${c.ready ? '' : ' is-pending'}`}>
            <h2>{c.name}</h2>
            <p>{c.blurb}</p>
            {c.ready ? (
              <p className="sprint-index__links">
                <Link to={`/${c.id}`}>Demo</Link>
                <Link to={`/${c.id}/styleguide`}>Styleguide</Link>
              </p>
            ) : (
              <p className="sprint-index__links is-pending">Not started</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
