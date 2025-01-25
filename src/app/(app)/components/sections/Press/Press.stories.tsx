import type { Meta, StoryObj } from '@storybook/react';
import Press from './Press';

const mockData = {
  title: "Press Coverage",
  description: "See what the media is saying about us",
  featuresList: [
    {
      title: "Innovation Award",
      description: "Recognized for breakthrough technology in opera accessibility",
      icon: { url: "/award-icon.svg" }
    },
    {
      title: "Global Impact",
      description: "Reaching audiences worldwide with revolutionary platform",
      icon: { url: "/globe-icon.svg" }
    }
  ]
};

const meta: Meta<typeof Press> = {
  title: 'Sections/Press',
  component: Press,
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
type Story = StoryObj<typeof Press>;

export const Default: Story = {};
