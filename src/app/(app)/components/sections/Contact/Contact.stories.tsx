import type { Meta, StoryObj } from '@storybook/react'
import Contact from './Contact'

const mockData = {
  title: 'Get in Touch',
  description: "We'd love to hear from you",
}

const meta: Meta<typeof Contact> = {
  title: 'Sections/Contact',
  component: Contact,
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
type Story = StoryObj<typeof Contact>

export const Default: Story = {}

export const SubmissionSuccess: Story = {
  decorators: [
    (Story) => {
      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(mockData),
          ok: true,
        } as Response)

      const _ = window.HTMLFormElement.prototype.submit
      window.HTMLFormElement.prototype.submit = () => {
        return Promise.resolve()
      }

      return <Story />
    },
  ],
}

export const SubmissionError: Story = {
  decorators: [
    (Story) => {
      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(mockData),
          ok: true,
        } as Response)

      const _ = window.HTMLFormElement.prototype.submit
      window.HTMLFormElement.prototype.submit = () => {
        throw new Error('Failed to submit form')
      }

      return <Story />
    },
  ],
}
