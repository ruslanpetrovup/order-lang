import type { Meta, StoryObj } from '@storybook/react';
import About from './About';

const mockData = {
  title: "About Us",
  subtitle: "Our mission is to make opera accessible to everyone",
  description: {
    content: [
      {
        content: [
          {
            text: "Detailed information about our company and mission...",
            type: "text"
          }
        ],
        type: "paragraph"
      }
    ]
  },
  link: {
    label: "Learn More",
    url: "/about"
  }
};

const meta: Meta<typeof About> = {
  title: 'Sections/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
    mockData: mockData
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
type Story = StoryObj<typeof About>;

export const Default: Story = {
  parameters: {
    mockData: mockData
  }
};

export const NoImage: Story = {
  decorators: [
    (Story) => {
      global.fetch = () => 
        Promise.resolve({
          json: () => Promise.resolve({ ...mockData, image: null }),
          ok: true,
        } as Response);
      return <Story />;
    },
  ],
}; 