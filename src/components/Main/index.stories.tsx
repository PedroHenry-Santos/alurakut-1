import { Meta, Story } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta;

export const Default: Story = args => {
  return <Main {...args} />;
};
Default.args = {
  title: 'Boilerplate NextJS',
  description: 'NextJS, React, Typescript, styled-components'
};

export const Basic: Story = args => {
  return <Main {...args} />;
};
Basic.args = {
  title: 'title basic',
  description: 'description basic'
};
