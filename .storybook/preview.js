import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as NextImage from 'next/image';

import light from 'assets/styles/themes/light'
import GlobalStyles from 'assets/styles/global'

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={light}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
