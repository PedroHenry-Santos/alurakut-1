import { Meta, Story } from '@storybook/react';

import { GitHubCorner } from '.';

export default {
  title: 'Illustrate',
  GitHubCorner
} as Meta;

export const Default: Story = args => {
  return <GitHubCorner {...args} />;
};
Default.args = {
  projectUrl: 'https://github.com/PedroHenry-Santos/boilerplate-next'
};
