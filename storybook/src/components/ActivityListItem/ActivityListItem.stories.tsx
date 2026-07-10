import type { Meta, StoryObj } from '@storybook/react'
import { ActivityListItem } from './ActivityListItem'

const meta: Meta<typeof ActivityListItem> = {
  title: 'Components/ActivityListItem',
  component: ActivityListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Recent Activity list row. Title + metadata + optional AI confidence meter + right-aligned time + optional status pill. Combines `StatusPill` and `ConfidenceMeter` — the two uniquely Standardly-specific components — in a realistic context.',
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="dir-o1" style={{ padding: '1rem', maxWidth: '560px' }}>
        <ul style={{ margin: 0, padding: 0 }}>
          <Story />
        </ul>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ActivityListItem>

export const WithPass: Story = {
  args: {
    title: 'WELL v2 · Air quality analysis completed',
    meta: 'Riverside Tower · 12 documents',
    time: '2h ago',
    status: 'pass',
    confidence: 87,
  },
}

export const WithPartial: Story = {
  args: {
    title: 'LEED v4 · Energy efficiency review',
    meta: 'City Hall Retrofit · 8 documents',
    time: '5h ago',
    status: 'partial',
    confidence: 54,
  },
}

export const WithFail: Story = {
  args: {
    title: 'BREEAM · Acoustic comfort analysis',
    meta: 'The Meridian · 4 documents',
    time: 'Yesterday',
    status: 'fail',
    confidence: 22,
  },
}

export const NeedsEvidence: Story = {
  args: {
    title: 'WELL v2 · Thermal comfort pending',
    meta: 'Riverside Tower · 2 documents',
    time: '3d ago',
    status: 'needsEvidence',
  },
}

export const ActivityFeed: Story = {
  render: () => (
    <div className="dir-o1" style={{ padding: '1rem', maxWidth: '560px' }}>
      <ul style={{ margin: 0, padding: 0 }}>
        <ActivityListItem title="WELL v2 · Air quality analysis" meta="Riverside Tower · 12 docs" time="2h ago" status="pass" confidence={87} />
        <ActivityListItem title="LEED v4 · Energy efficiency review" meta="City Hall Retrofit · 8 docs" time="5h ago" status="partial" confidence={54} />
        <ActivityListItem title="BREEAM · Acoustic comfort" meta="The Meridian · 4 docs" time="Yesterday" status="fail" confidence={22} />
        <ActivityListItem title="WELL v2 · Thermal comfort" meta="Riverside Tower · 2 docs" time="3d ago" status="needsEvidence" />
      </ul>
    </div>
  ),
}
