import { ReactNode } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import light from '../../assets/styles/themes/light';

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>);
};
