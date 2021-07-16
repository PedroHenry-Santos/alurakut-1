import { ReactNode } from 'react';

import { render, RenderResult } from '@testing-library/react';
import * as NextImage from 'next/image';
import { ThemeProvider } from 'styled-components';

import light from '../../assets/styles/themes/light';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: JSX.IntrinsicAttributes & NextImage.ImageProps) => (
    <OriginalNextImage {...props} unoptimized />
  )
});

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>);
};
