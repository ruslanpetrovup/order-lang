import type { Meta, StoryObj } from '@storybook/react';
import BlogList from './BlogList';

const mockData = {
  pressList: [
    {
      title: "The Future of Opera",
      description: "Exploring how technology is transforming the opera experience",
      link: { label: "Read More", url: "#" }
    },
    {
      title: "Innovation in Arts",
      description: "Breaking down barriers in performing arts accessibility",
      link: { label: "Read More", url: "#" }
    }
  ]
};

const meta: Meta<typeof BlogList> = {
  title: 'Sections/BlogList',
  component: BlogList,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => {
      global.fetch = () => 
        Promise.resolve({
          json: () => Promise.resolve(mockData),
          ok: true,
        } as Response);
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof BlogList>;

export const Default: Story = {};

export const Empty: Story = {
  decorators: [
    (Story) => {
      global.fetch = () => 
        Promise.resolve({
          json: () => Promise.resolve({ pressList: [] }),
          ok: true,
        } as Response);
      return <Story />;
    },
  ],
}; 