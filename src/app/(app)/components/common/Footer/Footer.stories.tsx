import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const mockData = {
  title: 'Isolde',
  address: '123 Opera Street',
  city: 'New York, NY 10001',
  email: 'contact@isolde.com',
  copyright: '© 2024 Isolde. All rights reserved.',
  socialLinks: [
    {
      icon: {
        url: '/api/media/file/facebook.png',
        alt: 'Facebook',
      },
      url: 'https://facebook.com',
    },
    {
      icon: {
        url: '/api/media/file/linkedin.avif',
        alt: 'Linkedin',
      },
      url: 'https://linkedin.com',
    },
  ],
  links: [
    {
      label: 'App Store',
      url: 'https://apps.apple.com',
      icon: {
        url: '/api/media/file/appstore.png',
        alt: 'App Store',
      },
    },
    {
      label: 'Play Store',
      url: 'https://play.google.com',
      icon: {
        url: '/api/media/file/google_play.png',
        alt: 'Play Store',
      },
    },
  ],
}

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
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
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
