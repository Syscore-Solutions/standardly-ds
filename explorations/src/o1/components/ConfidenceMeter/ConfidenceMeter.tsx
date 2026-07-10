import type { ConfidenceMeterProps } from './ConfidenceMeter.types'
import './ConfidenceMeter.css'

/**
 * Continuous 0–100% AI-confidence read-out (brief §7B). Deliberately its own
 * visual language: one purple fill on a neutral track — never a green→red
 * stoplight, never confusable with the discrete compliance status set.
 */
export function ConfidenceMeter({ value, hideValue = false, size = 'md' }: ConfidenceMeterProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)))
  return (
    <span className={`o1-confidence o1-confidence--${size}`}>
      <span
        className="o1-confidence__track"
        role="meter"
        aria-label="AI confidence"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
      >
        <span className="o1-confidence__fill" style={{ width: `${clamped}%` }} />
      </span>
      {!hideValue && <span className="o1-confidence__value o1-num">{clamped}%</span>}
    </span>
  )
}
