import { Meta, Story } from '@storybook/react';

import { Illustrate } from '.';

export default {
  title: 'Illustrate',
  component: Illustrate
} as Meta;

export const Default: Story = args => {
  return <Illustrate {...args} />;
};
