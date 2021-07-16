import type { AppProps } from 'next/app';
import Head from 'next/head';
import light from 'src/assets/styles/themes/light';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../assets/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Head>
        <title>Boilerplate NextJS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
