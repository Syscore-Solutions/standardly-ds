import type { Meta, StoryObj } from '@storybook/react'
import { Clock, FolderOpen, Activity } from 'lucide-react'
import { EmptyState } from './EmptyState'
import { Button } from '../Button'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Zero-state placeholder. Centred icon + title + optional description + optional CTA. Used when a list or panel has no items to show — guides the user toward their first action.',
      },
    },
    layout: 'padded',
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const NoActivity: Story = {
  args: {
    icon: <Clock />,
    title: 'No recent activity',
    description: 'Your analysis activity will appear here once you run your first review.',
  },
}

export const NoProjects: Story = {
  args: {
    icon: <FolderOpen />,
    title: 'No projects yet',
    description: 'Create a project to start submitting evidence for certification.',
    action: <Button variant="primary">Create a project</Button>,
  },
}

export const NoAnalyses: Story = {
  args: {
    icon: <Activity />,
    title: 'No analyses run',
    description: 'Upload evidence documents and trigger your first AI analysis.',
  },
}
