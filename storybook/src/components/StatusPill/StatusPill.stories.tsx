import type { Meta, StoryObj } from '@storybook/react'
import { StatusPill } from './StatusPill'

const meta: Meta<typeof StatusPill> = {
  title: 'Components/StatusPill',
  component: StatusPill,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Discrete compliance status chip — the 4-state set from `brief.md §7A`. Color is never the only signal: each status has a shape-distinct Lucide icon (CircleCheck / CircleMinus / CircleX / CircleDashed), satisfying colorblind-safe design. Soft tinted chips: `*.50` background + AA-verified dark text.',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['pass', 'partial', 'fail', 'needsEvidence'] },
    label: { control: 'text' },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof StatusPill>

export const Pass: Story = { args: { status: 'pass' } }
export const Partial: Story = { args: { status: 'partial' } }
export const Fail: Story = { args: { status: 'fail' } }
export const NeedsEvidence: Story = { args: { status: 'needsEvidence' } }
export const CustomLabel: Story = { args: { status: 'pass', label: 'Verified' } }

export const AllStatuses: Story = {
  render: () => (
    <div className="dir-o1" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', padding: '2rem' }}>
      <StatusPill status="pass" />
      <StatusPill status="partial" />
      <StatusPill status="fail" />
      <StatusPill status="needsEvidence" />
    </div>
  ),
}
