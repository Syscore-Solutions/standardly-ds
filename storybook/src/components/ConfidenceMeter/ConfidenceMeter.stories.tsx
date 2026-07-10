import type { Meta, StoryObj } from '@storybook/react'
import { ConfidenceMeter } from './ConfidenceMeter'

const meta: Meta<typeof ConfidenceMeter> = {
  title: 'Components/ConfidenceMeter',
  component: ConfidenceMeter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Continuous 0–100% AI-confidence readout (`brief.md §7B`). Its own visual language: a single purple fill on a neutral track. **Not** a green→red stoplight — never confusable with the discrete compliance `StatusPill`. Used wherever the AI surfaces a confidence score.',
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['sm', 'md'] },
    hideValue: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ConfidenceMeter>

export const High: Story = { args: { value: 87 } }
export const Medium: Story = { args: { value: 54 } }
export const Low: Story = { args: { value: 22 } }
export const MeterOnly: Story = { args: { value: 72, hideValue: true } }
export const Small: Story = { args: { value: 65, size: 'sm' } }

export const AllValues: Story = {
  render: () => (
    <div className="dir-o1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      {[92, 67, 41, 15].map((v) => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', width: '3rem' }}>
            {v}%
          </span>
          <ConfidenceMeter value={v} />
        </div>
      ))}
    </div>
  ),
}
