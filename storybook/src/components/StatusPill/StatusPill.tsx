import { CircleCheck, CircleMinus, CircleX, CircleDashed } from 'lucide-react'
import type { StatusPillProps, ComplianceStatus } from './StatusPill.types'
import './StatusPill.css'

// Shape-distinct icons: status is never encoded by color alone (brief §7A).
const STATUS_META: Record<ComplianceStatus, { label: string; Icon: typeof CircleCheck }> = {
  pass: { label: 'Pass', Icon: CircleCheck },
  partial: { label: 'Partial', Icon: CircleMinus },
  fail: { label: 'Fail', Icon: CircleX },
  needsEvidence: { label: 'Needs evidence', Icon: CircleDashed },
}

export function StatusPill({ status, label }: StatusPillProps) {
  const { label: defaultLabel, Icon } = STATUS_META[status]
  return (
    <span className={`o1-statuspill o1-statuspill--${status}`}>
      <Icon aria-hidden="true" />
      {label ?? defaultLabel}
    </span>
  )
}
