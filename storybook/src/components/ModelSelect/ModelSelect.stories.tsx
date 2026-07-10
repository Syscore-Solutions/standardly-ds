import type { Meta, StoryObj } from '@storybook/react'
import { ModelSelect } from './ModelSelect'

const meta: Meta<typeof ModelSelect> = {
  title: 'Components/ModelSelect',
  component: ModelSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AI model selector in the top navigation. Shows a Sparkles icon + "AI model" label + the current model name + a ChevronDown. Visual-only in this sprint (no menu); the full dropdown is a Phase 2 component.',
      },
    },
  },
  argTypes: {
    model: { control: 'text' },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem', background: 'var(--color-bg-default)' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ModelSelect>

export const ClaudeSonnet: Story = { args: { model: 'Claude Sonnet 4.5' } }
export const ClaudeOpus: Story = { args: { model: 'Claude Opus 4' } }
export const GPT4o: Story = { args: { model: 'GPT-4o' } }
