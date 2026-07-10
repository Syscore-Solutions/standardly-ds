import type { Meta, StoryObj } from '@storybook/react'
import { FolderOpen, CheckCircle, Clock, BarChart3 } from 'lucide-react'
import { StatCard } from './StatCard'

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Project-level stat readout. Icon tile + label + value (tabular numerals) + optional hint line. Appears in the 4-up stat row on the dashboard: Documents, Analyses, In Progress, Average Score.',
      },
    },
    layout: 'padded',
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Documents: Story = {
  args: { label: 'Project Documents', value: '24', icon: <FolderOpen />, tone: 'brand', hint: 'across 2 projects' },
}

export const Completed: Story = {
  args: { label: 'Analyses Completed', value: '8', icon: <CheckCircle />, tone: 'success' },
}

export const InProgress: Story = {
  args: { label: 'In Progress', value: '3', icon: <Clock />, tone: 'info' },
}

export const AverageScore: Story = {
  args: { label: 'Average Score', value: '74%', icon: <BarChart3 />, tone: 'neutral' },
}

export const EmptyState: Story = {
  args: { label: 'Project Documents', value: '0', icon: <FolderOpen />, tone: 'brand' },
}

export const DashboardRow: Story = {
  render: () => (
    <div className="dir-o1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '2rem', minWidth: '700px' }}>
      <StatCard label="Project Documents" value="24" icon={<FolderOpen />} tone="brand" hint="across 2 projects" />
      <StatCard label="Analyses Completed" value="8" icon={<CheckCircle />} tone="success" />
      <StatCard label="In Progress" value="3" icon={<Clock />} tone="info" />
      <StatCard label="Average Score" value="74%" icon={<BarChart3 />} tone="neutral" />
    </div>
  ),
}
