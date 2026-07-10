import { Link } from 'react-router-dom'

export function DirectionPlaceholder({ id, styleguide = false }: { id: string; styleguide?: boolean }) {
  return (
    <div className="sprint-index">
      <h1>
        {id}
        {styleguide ? ' / styleguide' : ''} — not started
      </h1>
      <p className="sprint-index__lede">
        This direction is pending definition (S1-T03) and build (S1-T07/T08).{' '}
        <Link to="/">Back to the sprint index</Link>.
      </p>
    </div>
  )
}
