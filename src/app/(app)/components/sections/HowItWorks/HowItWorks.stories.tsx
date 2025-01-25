import type { Meta, StoryObj } from '@storybook/react'
import { HowItWorks } from './HowItWorks'

const mockData = {
  title: 'How It Works',
  steps: [
    {
      title: 'Mobile Synchronization',
      description:
        'Experience seamless synchronization across all your mobile devices with our advanced technology. Using advanced synchronisation protocols, data packaging optimisation and precise system logic.',
      icon: { url: '/api/file/iPhoneAndroid.png' },
    },
    {
      title: 'Cloud Integration',
      description:
        'Secure cloud integration ensures your data is always available and protected. Built with scalability in mind, providing reliable access across all platforms.',
      icon: { url: '/api/file/laptop.avif' },
    },
  ],
}

const meta: Meta<typeof HowItWorks> = {
  title: 'Sections/HowItWorks',
  component: HowItWorks,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(mockData),
          ok: true,
        } as Response)
      return <Story />
    },
  ],
}

export default meta
type Story = StoryObj<typeof HowItWorks>

export const Default: Story = {}
