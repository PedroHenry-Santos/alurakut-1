import { Meta, Story } from '@storybook/react';

import { ProfileRelations } from '.';

const friends = [
  'omariosouto',
  'juunegreiros',
  'diego3g',
  'maykbrito',
  'filipedeschamps',
  'akitaonrails'
];

export default {
  title: 'ProfileRelations',
  component: ProfileRelations
} as Meta;

export const Default: Story = args => {
  return (
    <ProfileRelations
      pageUrl="users"
      UrlDomain="github.com"
      contentRender={friends}
      {...args}
    />
  );
};
