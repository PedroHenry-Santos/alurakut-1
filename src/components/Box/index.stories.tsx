import { Meta, Story } from '@storybook/react';

import { Box } from '.';

export default {
  title: 'Box',
  component: Box
} as Meta;

export const Default: Story = args => {
  return <Box {...args} />;
};
