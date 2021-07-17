import { Meta, Story } from '@storybook/react';

import { OrkutNostalgicIconSet } from '.';

export default {
  title: 'OrkutNostalgicIconSet',
  component: OrkutNostalgicIconSet,
  args: {
    props: {
      message: 15,
      photos: 12,
      videos: 14,
      fans: 54,
      posts: 152,
      reliable: 3,
      cool: 3,
      sexy: 2
    }
  }
} as Meta;

export const Default: Story = args => {
  return <OrkutNostalgicIconSet {...args} />;
};
