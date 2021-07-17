import { Meta, Story } from '@storybook/react';

import * as Icons from '.';

export default {
  title: 'Icons',
  components: [
    Icons.Book,
    Icons.Camera,
    Icons.VideoCamera,
    Icons.Star,
    Icons.Email,
    Icons.Smile,
    Icons.Cube,
    Icons.Heart
  ]
} as Meta;

export const Book: Story = args => {
  return <Icons.Book {...args} />;
};

export const Camera: Story = args => {
  return <Icons.Camera {...args} />;
};

export const VideoCamera: Story = args => {
  return <Icons.VideoCamera {...args} />;
};

export const Star: Story = args => {
  return <Icons.Star {...args} />;
};

export const Email: Story = args => {
  return <Icons.Email {...args} />;
};

export const Smile: Story = args => {
  return <Icons.Smile {...args} />;
};

export const Cube: Story = args => {
  return <Icons.Cube {...args} />;
};

export const Heart: Story = args => {
  return <Icons.Heart {...args} />;
};
