import type { ReactNode } from 'react'
import {
  BarChart3,
  BookOpen,
  Clock,
  FileText,
  FolderOpen,
  FolderPlus,
  Inbox,
  Percent,
  Rocket,
} from 'lucide-react'
import '../semantic.css'
import '../base.css'
import './styleguide.css'
import {
  ActionListItem,
  ActivityListItem,
  Button,
  Callout,
  Card,
  ConfidenceMeter,
  EmptyState,
  IconTile,
  ModelSelect,
  StatCard,
  StatusPill,
  TopNav,
} from '../components'

const PRINCIPLES = [
  {
    title: 'Soft geometry, serious structure.',
    body: 'Containers at radius.2xl, controls as full pills; underneath, an exact grid and strict alignment. Warmth comes from shape and space, never from loosening precision.',
  },
  {
    title: 'Quiet canvas, white work surfaces.',
    body: 'App background slate.50; content on white cards with hairline borders; at most one soft ambient shadow level. No heavy elevation.',
  },
  {
    title: 'Purple is a decision, not decoration.',
    body: 'Brand color only on the primary action, selected/active states, and focus rings. Everything else is slate.',
  },
  {
    title: 'Comfortable density.',
    body: 'Generous padding with small, muted labels — panels read calm at a glance and dense on inspection, via progressive disclosure.',
  },
  {
    title: 'Status speaks softly, twice.',
    body: 'Statuses are tinted chips always paired with a shape-distinct icon; AI confidence uses its own continuous meter language. Never stoplight saturation.',
  },
]

const SWATCH_GROUPS: { label: string; vars: string[] }[] = [
  {
    label: 'Background',
    vars: ['bg-canvas', 'bg-default', 'bg-subtle', 'bg-muted', 'bg-emphasis', 'bg-brand', 'bg-brand-emphasis', 'bg-inverse'],
  },
  {
    label: 'Text',
    vars: ['text-primary', 'text-secondary', 'text-tertiary', 'text-disabled', 'text-brand', 'text-link'],
  },
  {
    label: 'Action',
    vars: ['action-primary', 'action-primary-hover', 'action-primary-active', 'action-tonal', 'action-tonal-text', 'action-secondary-border'],
  },
  {
    label: 'Border',
    vars: ['border-subtle', 'border-default', 'border-strong', 'border-focus'],
  },
  {
    label: 'Status (discrete, brief §7A)',
    vars: [
      'status-pass-bg',
      'status-pass-text',
      'status-partial-bg',
      'status-partial-text',
      'status-fail-bg',
      'status-fail-text',
      'status-needs-evidence-bg',
      'status-needs-evidence-text',
    ],
  },
  {
    label: 'Confidence (continuous, brief §7B)',
    vars: ['confidence-fill', 'confidence-track'],
  },
]

function Spec({
  name,
  file,
  stack = false,
  canvas,
  doText,
  dontText,
}: {
  name: string
  file: string
  stack?: boolean
  canvas: ReactNode
  doText: string
  dontText: string
}) {
  return (
    <div className="o1-sg__spec">
      <div className="o1-sg__spec-head">
        <h3 className="o1-h3">{name}</h3>
        <code>{file}</code>
      </div>
      <div className={`o1-sg__spec-canvas${stack ? ' o1-sg__spec-canvas--stack' : ''}`}>{canvas}</div>
      <div className="o1-sg__dodont">
        <div className="do">
          <strong>Do</strong>
          {doText}
        </div>
        <div className="dont">
          <strong>Don't</strong>
          {dontText}
        </div>
      </div>
    </div>
  )
}

export function O1Styleguide() {
  return (
    <div className="dir-o1">
      <div className="o1-sg">
        <header className="o1-sg__header">
          <p className="o1-overline">Direction o1 · Sprint S1</p>
          <h1 className="o1-h1">Soft Precision</h1>
          <p className="o1-sg__feel">
            Serious compliance infrastructure that feels like a well-lit studio, not a server room.
            Reference set: the Link AI copilot dashboard (design language only), the Stripe density
            register, Claude.ai's warm-neutral chrome. Same primitives as every direction — the remap
            lives in <code className="o1-mono">o1/semantic.css</code>.
          </p>
        </header>

        <section aria-labelledby="sg-principles">
          <h2 className="o1-h2" id="sg-principles">
            Principles
          </h2>
          <ol className="o1-sg__principles">
            {PRINCIPLES.map((p) => (
              <li key={p.title} className="o1-sg__principle">
                <strong>{p.title}</strong>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="sg-tokens">
          <h2 className="o1-h2" id="sg-tokens">
            Semantic tokens
          </h2>
          <p className="o1-body-sm o1-muted">
            Every value below is a reference to a locked primitive in <code className="o1-mono">tokens.json</code>.
            All text pairs are WCAG AA verified (ratios recorded in <code className="o1-mono">semantic.css</code>).
          </p>
          {SWATCH_GROUPS.map((g) => (
            <div key={g.label} className="o1-sg__swatchgroup">
              <p className="o1-overline">{g.label}</p>
              <div className="o1-sg__swatches">
                {g.vars.map((v) => (
                  <div key={v} className="o1-sg__swatch">
                    <div className="o1-sg__swatch-chip" style={{ background: `var(--color-${v})` }} />
                    <span className="o1-sg__swatch-name">--color-{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="o1-sg__swatchgroup">
            <p className="o1-overline">Radius roles</p>
            <div className="o1-sg__radii">
              {['control', 'container', 'overlay', 'badge', 'tile'].map((r) => (
                <div key={r} className="o1-sg__radius">
                  <div className="o1-sg__radius-box" style={{ borderRadius: `var(--radius-${r})` }} />
                  --radius-{r}
                </div>
              ))}
            </div>
          </div>
          <div className="o1-sg__swatchgroup">
            <p className="o1-overline">Type recipes</p>
            <div>
              <div className="o1-sg__typerow">
                <code>.o1-h1</code>
                <span className="o1-h1">Certification readiness</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-h2</code>
                <span className="o1-h2">Certification readiness</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-h3</code>
                <span className="o1-h3">Certification readiness</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-body</code>
                <span className="o1-body">Upload evidence and the analysis pipeline scores it against each requirement.</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-body-sm</code>
                <span className="o1-body-sm">Upload evidence and the analysis pipeline scores it against each requirement.</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-overline</code>
                <span className="o1-overline">Recent activity</span>
              </div>
              <div className="o1-sg__typerow">
                <code>.o1-mono / .o1-num</code>
                <span className="o1-mono o1-num">A02.1 · 87% · 2026-07-10</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="sg-gallery">
          <h2 className="o1-h2" id="sg-gallery">
            Components
          </h2>

          <Spec
            name="Button"
            file="components/Button"
            canvas={
              <>
                <Button icon={<Rocket />}>Try interactive demo</Button>
                <Button variant="tonal">Create your first project</Button>
                <Button variant="secondary">View report</Button>
                <Button disabled>Disabled</Button>
                <Button size="sm" variant="secondary">
                  Small
                </Button>
              </>
            }
            doText="One primary button per view — it marks the single most important action."
            dontText="Use the primary variant for navigation or repeat it across a page; secondary/tonal carry everything else."
          />

          <Spec
            name="StatusPill"
            file="components/StatusPill"
            canvas={
              <>
                <StatusPill status="pass" />
                <StatusPill status="partial" />
                <StatusPill status="fail" />
                <StatusPill status="needsEvidence" />
              </>
            }
            doText="Keep the icon — each status is shape-distinct so color-blind reviewers can tell them apart."
            dontText="Encode AI confidence with these, or invent new statuses; the compliance set is fixed (brief §7A)."
          />

          <Spec
            name="ConfidenceMeter"
            file="components/ConfidenceMeter"
            canvas={
              <>
                <ConfidenceMeter value={34} />
                <ConfidenceMeter value={68} />
                <ConfidenceMeter value={92} />
                <ConfidenceMeter value={92} size="sm" hideValue />
              </>
            }
            doText="Use for the continuous 0–100% AI confidence — always the same purple fill regardless of value."
            dontText="Map its color to the value (green-high / red-low turns it into a stoplight and collides with status)."
          />

          <Spec
            name="StatCard"
            file="components/StatCard"
            canvas={
              <>
                <StatCard label="Project documents" value="128" hint="across 4 projects" icon={<FileText />} tone="brand" />
                <StatCard label="Average score" value="87%" icon={<Percent />} tone="success" />
                <StatCard label="In progress" value="0" icon={<Clock />} />
              </>
            }
            doText="Values render in tabular numerals; keep labels one line."
            dontText="Put actions inside a stat card — it is a read-only glance surface."
          />

          <Spec
            name="Card"
            file="components/Card"
            stack
            canvas={
              <Card title="Quick actions" action={<Button size="sm" variant="secondary">See all</Button>}>
                <p className="o1-body-sm o1-muted" style={{ margin: 0 }}>
                  Card body content — any composition.
                </p>
              </Card>
            }
            doText="Use as the white work surface on the slate canvas; one ambient shadow only."
            dontText="Nest cards inside cards or stack heavier shadows to fake hierarchy — use spacing and type."
          />

          <Spec
            name="IconTile"
            file="components/IconTile"
            canvas={
              <>
                <IconTile icon={<FolderPlus />} tone="brand" />
                <IconTile icon={<FolderOpen />} tone="success" />
                <IconTile icon={<BarChart3 />} tone="info" />
                <IconTile icon={<Inbox />} tone="neutral" />
                <IconTile icon={<FolderPlus />} tone="brand" size="lg" />
              </>
            }
            doText="Tinted fills only (50/100 background + 700 icon) — o1 demotes the prototype's solid squares."
            dontText="Use saturated solid fills or introduce colors outside brand/success/info/neutral."
          />

          <Spec
            name="ActionListItem"
            file="components/ActionListItem"
            stack
            canvas={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ActionListItem icon={<FolderPlus />} title="Create project" description="Start a new project for document analysis" />
                <ActionListItem icon={<BookOpen />} tone="info" title="Browse standards" description="Explore certification standards" />
              </div>
            }
            doText="The whole row is the target; the chevron appears on hover/focus as the affordance."
            dontText="Add a second button inside the row — one row, one action."
          />

          <Spec
            name="ActivityListItem"
            file="components/ActivityListItem"
            stack
            canvas={
              <ul style={{ margin: 0, padding: 0 }}>
                <ActivityListItem
                  title="WELL v2 · Air quality analysis completed"
                  meta="Riverside Tower · 12 documents"
                  time="2h ago"
                  status="pass"
                  confidence={92}
                />
                <ActivityListItem
                  title="LEED O+M · Water efficiency review"
                  meta="Harbor Point · 4 documents"
                  time="Yesterday"
                  status="needsEvidence"
                />
              </ul>
            }
            doText="Status (discrete pill) and AI confidence (meter) appear side by side but stay visually distinct languages."
            dontText="Let AI outputs dominate the row — the human-readable event title leads (brief §3.2)."
          />

          <Spec
            name="EmptyState"
            file="components/EmptyState"
            stack
            canvas={
              <EmptyState
                icon={<Clock />}
                title="No recent activity"
                description="Analysis runs and reviews will appear here as your team works."
                action={<Button variant="tonal" size="sm">Start an analysis</Button>}
              />
            }
            doText="Say what will appear here and offer the next step — guided, reassuring (brief §12.2)."
            dontText="Leave a bare icon + label; an empty state is onboarding, not a dead end."
          />

          <Spec
            name="Callout"
            file="components/Callout"
            stack
            canvas={
              <Callout
                icon={<BookOpen />}
                title="Getting started with project-based analysis"
                action={<Button variant="tonal">Create your first project</Button>}
              >
                <p>New to Standardly? Create a project, upload documents, then pick a standard to analyze against.</p>
              </Callout>
            }
            doText="Reserve for guidance/onboarding — it is the one purposefully brand-tinted surface per page."
            dontText="Use it for warnings or errors (feedback roles exist for that), or place two on one screen."
          />

          <Spec
            name="ModelSelect"
            file="components/ModelSelect"
            canvas={<ModelSelect model="Claude Sonnet 4.5" />}
            doText="Keep the AI model visible but quiet — advisory framing (brief §13)."
            dontText="Promote it to a primary control; it is configuration, not a call to action."
          />

          <Spec
            name="TopNav"
            file="components/TopNav"
            stack
            canvas={
              <TopNav
                items={[
                  { id: 'dashboard', label: 'Dashboard' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'usage', label: 'My usage' },
                  { id: 'admin', label: 'Admin', hasMenu: true },
                ]}
                activeId="dashboard"
                userName="Naman"
                model="Claude Sonnet 4.5"
              />
            }
            doText="Active link gets the tonal purple pill — one of purple's three earned uses (action, selection, focus)."
            dontText="Fill the bar with icon buttons; everything after the nav links stays in the right cluster."
          />
        </section>
      </div>
    </div>
  )
}
