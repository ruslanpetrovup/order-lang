import type { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const mockData = {
  title: 'Reinventing Opera Accessibility',
  subtitle: 'Experience opera like never before',
  quote: 'Revolutionary platform bringing opera to everyone through innovative technology',
  additionalImages: [
    {
      image: {
        url: '/api/media/file/iPhoneAndroid.png',
        alt: 'IphoneAndroid',
      },
    },
    {
      image: {
        url: '/api/media/file/desktop.png',
        alt: 'desktop',
      },
    },
  ],
  linkImages: [
    {
      link: 'https://apps.apple.com',
      image: {
        url: '/api/media/file/appstore.png',
        alt: 'Download on App Store',
      },
    },
    {
      link: 'https://play.google.com',
      image: {
        url: '/api/media/file/google_play.png',
        alt: 'Get it on Google Play',
      },
    },
  ],
}

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
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
type Story = StoryObj<typeof Hero>

export const Default: Story = {}
