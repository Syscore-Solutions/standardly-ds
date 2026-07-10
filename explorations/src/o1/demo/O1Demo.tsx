import { useState } from 'react'
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  FolderOpen,
  FolderPlus,
  Percent,
  Sparkles,
} from 'lucide-react'
import '../semantic.css'
import '../base.css'
import './demo.css'
import {
  ActionListItem,
  ActivityListItem,
  Button,
  Callout,
  Card,
  EmptyState,
  StatCard,
  TopNav,
  type ActivityListItemProps,
} from '../components'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'projects', label: 'Projects' },
  { id: 'usage', label: 'My usage' },
  { id: 'admin', label: 'Admin', hasMenu: true },
]

const QUICK_ACTIONS = [
  { icon: <FolderPlus />, tone: 'brand' as const, title: 'Create project', description: 'Start a new project for document analysis' },
  { icon: <FolderOpen />, tone: 'success' as const, title: 'View projects', description: 'Manage your existing projects' },
  { icon: <BookOpen />, tone: 'brand' as const, title: 'Browse standards', description: 'Explore certification standards' },
  { icon: <BarChart3 />, tone: 'info' as const, title: 'My usage', description: 'View your token usage, costs, and analyses' },
]

const ACTIVITY: ActivityListItemProps[] = [
  { title: 'WELL v2 · Air quality analysis completed', meta: 'Riverside Tower · 12 documents', time: '2h ago', status: 'pass', confidence: 92 },
  { title: 'LEED O+M · Water efficiency review', meta: 'Harbor Point · 4 documents', time: '5h ago', status: 'partial', confidence: 68 },
  { title: 'BREEAM · Energy monitoring evidence requested', meta: 'Northgate Campus · 2 requirements open', time: 'Yesterday', status: 'needsEvidence' },
  { title: 'WELL v2 · Thermal comfort analysis completed', meta: 'Riverside Tower · 6 documents', time: 'Yesterday', status: 'fail', confidence: 81 },
  { title: 'WELL v2 · Water quality testing report scored', meta: 'Meridian Plaza · 3 documents', time: '2d ago', status: 'pass', confidence: 88 },
]

type DemoState = 'new' | 'active'

export function O1Demo() {
  const [state, setState] = useState<DemoState>('active')
  const isNew = state === 'new'

  return (
    <div className="dir-o1">
      <div className="o1-demo">
        <TopNav items={NAV_ITEMS} activeId="dashboard" userName="Naman" model="Claude Sonnet 4.5" />

        <div className="o1-demo__page">
          {/* Demo-only chrome: lets the team call flip between the prototype's
              empty state and the populated "improved" state. Not product UI. */}
          <div className="o1-demo__statebar">
            View as
            <div className="o1-demo__statebar-group" role="group" aria-label="Demo data state">
              <button
                type="button"
                className={`o1-demo__statebtn${isNew ? ' is-active' : ''}`}
                aria-pressed={isNew}
                onClick={() => setState('new')}
              >
                New user
              </button>
              <button
                type="button"
                className={`o1-demo__statebtn${!isNew ? ' is-active' : ''}`}
                aria-pressed={!isNew}
                onClick={() => setState('active')}
              >
                Active project
              </button>
            </div>
          </div>

          <header className="o1-demo__header">
            <div className="o1-demo__greeting">
              <h1 className="o1-h1">Welcome back, Naman</h1>
              <p className="o1-body">Create projects to organize your document analysis workflow.</p>
            </div>
            <Button icon={<Sparkles />}>Try interactive demo</Button>
          </header>

          <div className="o1-demo__stats">
            <StatCard
              label="Project documents"
              value={isNew ? '0' : '128'}
              hint={isNew ? undefined : 'across 4 projects'}
              icon={<FileText />}
              tone="brand"
            />
            <StatCard label="Analyses completed" value={isNew ? '0' : '36'} icon={<CheckCircle2 />} tone="success" />
            <StatCard label="In progress" value={isNew ? '0' : '3'} icon={<Clock />} tone="info" />
            <StatCard label="Average score" value={isNew ? 'N/A' : '87%'} icon={<Percent />} tone={isNew ? 'neutral' : 'success'} />
          </div>

          <div className="o1-demo__band">
            <Card title="Quick actions">
              <div className="o1-demo__actions-list">
                {QUICK_ACTIONS.map((a) => (
                  <ActionListItem key={a.title} {...a} />
                ))}
              </div>
            </Card>

            <Card
              title="Recent activity"
              action={!isNew ? <Button size="sm" variant="secondary">View all</Button> : undefined}
              flush={!isNew}
            >
              {isNew ? (
                <EmptyState
                  icon={<Clock />}
                  title="No recent activity"
                  description="Analysis runs and reviews will appear here as your team works."
                />
              ) : (
                <ul className="o1-demo__activity-list">
                  {ACTIVITY.map((a) => (
                    <ActivityListItem key={a.title} {...a} />
                  ))}
                </ul>
              )}
            </Card>
          </div>

          {isNew && (
            <Callout
              icon={<BookOpen />}
              title="Getting started with project-based analysis"
              action={<Button variant="tonal">Create your first project</Button>}
            >
              <p>New to Standardly? Here's how to get started:</p>
              <ol>
                <li>Create your first project</li>
                <li>Upload documents to your project</li>
                <li>Select a certification standard to analyze against</li>
                <li>Review your compliance scores and recommendations</li>
                <li>Download your analysis reports</li>
              </ol>
            </Callout>
          )}
        </div>
      </div>
    </div>
  )
}
