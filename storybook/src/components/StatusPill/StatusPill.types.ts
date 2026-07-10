export type ComplianceStatus = 'pass' | 'partial' | 'fail' | 'needsEvidence'

export interface StatusPillProps {
  status: ComplianceStatus
  /** Override the default label (defaults per status: Pass / Partial / Fail / Needs evidence). */
  label?: string
}
