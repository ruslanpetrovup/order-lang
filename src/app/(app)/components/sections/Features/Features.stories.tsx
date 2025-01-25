import type { Meta, StoryObj } from '@storybook/react'
import Features from './Features'

const mockData = {
  title: 'Our Technology',
  description: 'Discover what makes our platform unique',
  featuresList: [
    {
      title: 'Ultra low latency',
      description:
        'Using advanced synchronisation protocols, data packaging optimisation and precise system logic, audiences experience close to zero latency, regardless of mobile data connectivity or the IT infrastructure.',
      icon: { url: '/api/media/file/star.svg' },
    },
    {
      title: 'Scalable Accessibility',
      description:
        'With a scalable architecture in mind, the platform and audience interface have been built with at its core, a high degree of accessibility and conscious UX for people of all ages regardless of their technological literacy.',
      icon: { url: '/api/media/file/person.svg' },
    },
    {
      title: 'Secure Business Analytics',
      description:
        "ISOLDE provides performing arts organisations with a new way to reach out to audiences, affirm their relevance on today's data driven societies and capitalise on user interaction feedback to make induced decisions.",
      icon: { url: '/api/media/file/guard.svg' },
    },
  ],
}

const meta: Meta<typeof Features> = {
  title: 'Sections/Features',
  component: Features,
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
type Story = StoryObj<typeof Features>

export const Default: Story = {}

export const SingleFeature: Story = {
  decorators: [
    (Story) => {
      global.fetch = () =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              ...mockData,
              featuresList: [mockData.featuresList[0]],
            }),
          ok: true,
        } as Response)
      return <Story />
    },
  ],
}
