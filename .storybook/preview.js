import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from 'assets/styles/themes/light'
import GlobalStyles from 'assets/styles/global'

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
