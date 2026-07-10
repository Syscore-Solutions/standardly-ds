import type { ComplianceStatus } from '../StatusPill'

export interface ActivityListItemProps {
  /** e.g. "WELL v2 · Air quality analysis completed" */
  title: string
  /** e.g. "Riverside Tower · 12 documents" */
  meta: string
  /** Relative or absolute time, rendered right-aligned. */
  time: string
  status?: ComplianceStatus
  /** AI confidence 0–100 — renders the ConfidenceMeter when present. */
  confidence?: number
}
