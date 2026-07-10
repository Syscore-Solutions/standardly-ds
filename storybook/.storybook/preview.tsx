import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/tokens/primitives.css'
import '../src/tokens/semantic.css'
import '../src/tokens/base.css'
import '@fontsource/geist-sans'
import '@fontsource/geist-mono'
import 'cal-sans'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#f5f7fa' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    layout: 'centered',
    a11y: { config: {} },
  },
  decorators: [
    (Story) => (
      <div className="dir-o1" style={{ minWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
}

export default preview
