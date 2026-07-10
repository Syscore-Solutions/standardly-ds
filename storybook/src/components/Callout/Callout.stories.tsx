import type { Meta, StoryObj } from '@storybook/react'
import { Lightbulb } from 'lucide-react'
import { Callout } from './Callout'
import { Button } from '../Button'

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Brand-tinted onboarding / guidance panel. Sits on the brand `purple.50` surface. The icon tile inside a Callout renders on white (not on tint) to maintain contrast. Used for "Getting Started" guidance and key contextual prompts.',
      },
    },
    layout: 'padded',
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem', maxWidth: '560px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Callout>

export const GettingStarted: Story = {
  args: {
    icon: <Lightbulb />,
    title: 'Getting Started with Project-Based Analysis',
    children: (
      <ol>
        <li>Create a project for your building certification</li>
        <li>Upload evidence documents relevant to each requirement</li>
        <li>Run an AI analysis to get compliance scores and recommendations</li>
      </ol>
    ),
    action: <Button variant="tonal" size="sm">Create Your First Project</Button>,
  },
}

export const NoAction: Story = {
  args: {
    icon: <Lightbulb />,
    title: 'Pro tip: batch your uploads',
    children: <p>Uploading multiple documents at once lets the AI cross-reference evidence across requirements.</p>,
  },
}
