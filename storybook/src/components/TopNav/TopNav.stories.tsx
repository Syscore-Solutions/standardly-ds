import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TopNav } from './TopNav'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'projects', label: 'Projects' },
  { id: 'usage', label: 'My Usage' },
  { id: 'admin', label: 'Admin', hasMenu: true },
]

const meta: Meta<typeof TopNav> = {
  title: 'Components/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Primary application header. Standardly wordmark + nav links (active link = tonal brand pill) + AI model selector + user greeting + avatar cluster. The active pill is one of purple\'s three permitted uses (actions, active states, focus rings).',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [(Story) => <div className="dir-o1"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof TopNav>

export const Dashboard: Story = {
  args: {
    items: NAV_ITEMS,
    activeId: 'dashboard',
    userName: 'Naman',
    model: 'Claude Sonnet 4.5',
  },
}

export const Projects: Story = {
  args: {
    items: NAV_ITEMS,
    activeId: 'projects',
    userName: 'Naman',
    model: 'Claude Sonnet 4.5',
  },
}

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard')
    return (
      <div className="dir-o1">
        <TopNav items={NAV_ITEMS} activeId={active} userName="Naman" model="Claude Sonnet 4.5" onNavigate={setActive} />
        <div style={{ padding: '2rem', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
          Active section: <strong style={{ color: 'var(--color-text-primary)' }}>{active}</strong>
        </div>
      </div>
    )
  },
}
