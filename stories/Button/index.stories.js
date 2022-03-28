import * as React from 'react';

import Button from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: 'Button',
  component: Button,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  type: 'standard',
  label: 'Button',
  leftarrow: false,
  rightarrow: false,
  disabled: false,
  height: 32,
};
