import type { Meta, StoryObj } from '@storybook/react';
import Bring from './Bring';

const mockData = {
  title: "What We Bring",
  subtitle: "Revolutionary Technology",
  description: "Using advanced synchronisation protocols, data packaging optimisation and precise system logic to deliver an unparalleled opera experience.",
  link: {
    label: "Learn More",
    url: "#"
  }
};

const meta: Meta<typeof Bring> = {
  title: 'Sections/Bring',
  component: Bring,
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
type Story = StoryObj<typeof Bring>;

export const Default: Story = {};