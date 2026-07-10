import type { Meta, StoryObj } from '@storybook/react'
import { FolderOpen, CheckCircle, Info, Grid2x2 } from 'lucide-react'
import { IconTile } from './IconTile'

const meta: Meta<typeof IconTile> = {
  title: 'Components/IconTile',
  component: IconTile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tinted icon container. o1 uses *tinted* tiles (`*.50` bg + `*.700` icon) rather than solid saturated squares — consistent with "purple is a decision, not decoration." Four tones: `brand`, `success`, `info`, `neutral`. Two sizes: `md` (32px) and `lg` (48px).',
      },
    },
  },
  argTypes: {
    tone: { control: 'select', options: ['brand', 'success', 'info', 'neutral'] },
    size: { control: 'select', options: ['md', 'lg'] },
  },
  decorators: [(Story) => <div className="dir-o1" style={{ padding: '2rem' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof IconTile>

export const Brand: Story = { args: { icon: <FolderOpen />, tone: 'brand', size: 'md' } }
export const Success: Story = { args: { icon: <CheckCircle />, tone: 'success', size: 'md' } }
export const InfoTone: Story = { args: { icon: <Info />, tone: 'info', size: 'md' } }
export const Neutral: Story = { args: { icon: <Grid2x2 />, tone: 'neutral', size: 'md' } }
export const Large: Story = { args: { icon: <FolderOpen />, tone: 'brand', size: 'lg' } }

export const AllTones: Story = {
  render: () => (
    <div className="dir-o1" style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <IconTile icon={<FolderOpen />} tone="brand" />
      <IconTile icon={<CheckCircle />} tone="success" />
      <IconTile icon={<Info />} tone="info" />
      <IconTile icon={<Grid2x2 />} tone="neutral" />
    </div>
  ),
}
