import type { Meta, StoryObj } from '@storybook/react'
import { FolderPlus, FolderOpen, BookOpen, BarChart3 } from 'lucide-react'
import { ActionListItem } from './ActionListItem'

const meta: Meta<typeof ActionListItem> = {
  title: 'Components/ActionListItem',
  component: ActionListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Whole-row tappable action. Icon tile + title + description + trailing chevron. The chevron animates in on hover (restrained motion per brief §10). Appears in the Quick Actions card on the dashboard.',
      },
    },
    layout: 'padded',
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '1rem', maxWidth: '480px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ActionListItem>

export const CreateProject: Story = {
  args: {
    icon: <FolderPlus />,
    tone: 'brand',
    title: 'Create Project',
    description: 'Start a new building certification project',
  },
}

export const ViewProjects: Story = {
  args: {
    icon: <FolderOpen />,
    tone: 'neutral',
    title: 'View Projects',
    description: 'Browse your existing projects',
  },
}

export const QuickActionsGroup: Story = {
  render: () => (
    <div className="dir-o1" style={{ padding: '1rem', maxWidth: '480px' }}>
      <ActionListItem icon={<FolderPlus />} tone="brand" title="Create Project" description="Start a new building certification project" />
      <ActionListItem icon={<FolderOpen />} tone="neutral" title="View Projects" description="Browse your existing projects" />
      <ActionListItem icon={<BookOpen />} tone="info" title="Browse Standards" description="Explore WELL, LEED, BREEAM requirements" />
      <ActionListItem icon={<BarChart3 />} tone="success" title="My Usage" description="View your analysis credits and history" />
    </div>
  ),
}
