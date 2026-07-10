import type { Meta, StoryObj } from '@storybook/react'
import { Plus, ArrowRight } from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The primary interactive control. Three variants: `primary` (one brand action per view), `tonal` (secondary brand-tinted), `secondary` (tertiary, ghost). Pill geometry is the o1 signature — `radius-control = full`.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'tonal', 'secondary'] },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Try Interactive Demo' },
}

export const Tonal: Story = {
  args: { variant: 'tonal', children: 'Create Your First Project' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'View Projects' },
}

export const WithIcon: Story = {
  args: { variant: 'primary', icon: <Plus />, children: 'New Project' },
}

export const Small: Story = {
  args: { variant: 'secondary', size: 'sm', icon: <ArrowRight />, children: 'Learn more' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Unavailable' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="dir-o1" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary" icon={<Plus />}>With icon</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
}
