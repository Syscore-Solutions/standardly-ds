import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The white work surface on the slate canvas. Soft `2xl` radius, hairline `slate.200` border, single quiet ambient shadow. The o1 signature: warmth via geometry + space, not color.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    title: { control: 'text' },
    flush: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem', minWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Quick Actions',
    children: <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>Card body content goes here.</p>,
  },
}

export const WithAction: Story = {
  args: {
    title: 'Recent Activity',
    action: <Button variant="secondary" size="sm">View all</Button>,
    children: <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>Activity items would appear here.</p>,
  },
}

export const Flush: Story = {
  args: {
    title: 'Flush List',
    flush: true,
    children: (
      <ul style={{ margin: 0, padding: 0 }}>
        {['Item one', 'Item two', 'Item three'].map((item) => (
          <li key={item} style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border-subtle)', listStyle: 'none', fontSize: 'var(--font-size-sm)' }}>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
}

export const NoTitle: Story = {
  args: {
    children: <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', margin: 0 }}>A card without a title — useful for wrapping non-titled sections.</p>,
  },
}
