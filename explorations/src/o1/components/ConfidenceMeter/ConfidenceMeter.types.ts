export interface ConfidenceMeterProps {
  /** AI confidence, 0–100. */
  value: number
  /** Hide the numeric read-out (meter only). */
  hideValue?: boolean
  size?: 'sm' | 'md'
}
