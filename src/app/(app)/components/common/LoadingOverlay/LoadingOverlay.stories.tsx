import type { Meta, StoryObj } from '@storybook/react'
import LoadingOverlay from './LoadingOverlay'
import { LoadingProvider } from '../../../context/LoadingContext'

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <LoadingProvider>
        <div style={{ height: '100vh', position: 'relative' }}>
          <Story />
        </div>
      </LoadingProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LoadingOverlay>

export const Default: Story = {}

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <LoadingProvider>
        <div style={{ height: '100vh', position: 'relative' }}>
          <div>Some content behind the overlay</div>
          <Story />
        </div>
      </LoadingProvider>
    ),
  ],
}
