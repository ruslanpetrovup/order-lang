import type { Meta, StoryObj } from '@storybook/react'
import Navigation from './Navigation'

const mockData = {
  logo: { url: '/api/media/file/logo-1.png', alt: 'Logo' },
  navigationLinks: [
    {
      label: 'Home',
      url: '/#home',
      submenu: [],
    },
    {
      label: 'About',
      url: '/#about',
      submenu: [
        { label: 'Our Story', url: '/#story' },
        { label: 'Team', url: '/#team' },
      ],
    },
    {
      label: 'Contact',
      url: '/#contact',
      submenu: [],
    },
  ],
}

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
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
type Story = StoryObj<typeof Navigation>

export const Default: Story = {}
