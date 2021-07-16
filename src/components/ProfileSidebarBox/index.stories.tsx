import { Meta, Story } from '@storybook/react';

import { ProfileSidebarBox } from '.';

export default {
  title: 'ProfileSidebarBox',
  component: ProfileSidebarBox,
  args: {
    githubUser: 'Pedrohenry-Santos'
  }
} as Meta;

export const Default: Story = args => {
  return <ProfileSidebarBox githubUser="githubUser" {...args} />;
};
