import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['mini', 'sm', 'default', 'lg'],
    },
    roundness: {
      control: 'radio',
      options: ['default', 'round'],
    },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

// ── Playground ────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    roundness: 'default',
    children: 'Label',
    disabled: false,
  },
};

// ── All Variants ──────────────────────────────────────────────

const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' };
const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16 };
const label: React.CSSProperties = { fontSize: 12, color: 'var(--generalMutedForeground)', minWidth: 100 };
const section: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 };

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={col}>
      {(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const).map((v) => (
        <div key={v} style={row}>
          <span style={label}>{v}</span>
          <Button variant={v}>Label</Button>
          <Button variant={v} disabled>Label</Button>
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={col}>
      {(['mini', 'sm', 'default', 'lg'] as const).map((s) => (
        <div key={s} style={row}>
          <span style={label}>{s}</span>
          <Button size={s}>Label</Button>
          <Button size={s} variant="secondary">Label</Button>
          <Button size={s} variant="outline">Label</Button>
        </div>
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  name: 'Round variants',
  render: () => (
    <div style={col}>
      {(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const).map((v) => (
        <div key={v} style={row}>
          <span style={label}>{v}</span>
          <Button variant={v} roundness="round">Label</Button>
          <Button variant={v} roundness="round" disabled>Label</Button>
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  name: 'With icons',
  render: () => (
    <div style={section}>
      <div style={row}>
        <Button leftIcon={<PlusIcon />}>New item</Button>
        <Button variant="secondary" rightIcon={<ArrowIcon />}>Continue</Button>
        <Button variant="outline" leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>Both icons</Button>
        <Button variant="ghost" leftIcon={<PlusIcon />}>Add</Button>
        <Button variant="destructive" leftIcon={<PlusIcon />}>Delete</Button>
      </div>
      <div style={row}>
        <Button size="sm" leftIcon={<PlusIcon />}>Small</Button>
        <Button size="mini" leftIcon={<PlusIcon />}>Mini</Button>
        <Button size="lg" rightIcon={<ArrowIcon />}>Large</Button>
      </div>
    </div>
  ),
};

export const DarkTheme: Story = {
  name: 'Dark theme',
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ background: 'var(--generalBackground)', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={col}>
      {(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const).map((v) => (
        <div key={v} style={row}>
          <span style={label}>{v}</span>
          <Button variant={v}>Label</Button>
          <Button variant={v} roundness="round">Round</Button>
          <Button variant={v} disabled>Disabled</Button>
        </div>
      ))}
    </div>
  ),
};
