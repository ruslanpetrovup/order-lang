import type { Meta, StoryObj } from '@storybook/react';
import Reviews from './Reviews';

const mockData = {
  reviewsList: [
    {
      quote: "An exemplary project for Next Stage and I hope it will act as an incentive and lighthouse for the future.",
      author: "Nicholas PAYNE",
      employees: [
        {
          name: "John Doe",
          position: "Director — Opera Europa"
        }
      ]
    },
    {
      quote: "Another great review showcasing the potential of this platform.",
      author: "Jane Smith",
      employees: [
        {
          name: "Alice Johnson",
          position: "Manager — Opera Innovation"
        }
      ]
    }
  ]
};

const meta: Meta<typeof Reviews> = {
  title: 'Sections/Reviews',
  component: Reviews,
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
type Story = StoryObj<typeof Reviews>;

export const Default: Story = {};

export const SingleReview: Story = {
  decorators: [
    (Story) => {
      global.fetch = () => 
        Promise.resolve({
          json: () => Promise.resolve({
            reviewsList: [mockData.reviewsList[0]]
          }),
          ok: true,
        } as Response);
      return <Story />;
    },
  ],
};