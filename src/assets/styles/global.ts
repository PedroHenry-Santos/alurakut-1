import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
  url('fonts/rubik-v14-latin-regular.woff2') format('woff2'),
}

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
  url('fonts/rubik-v14-latin-700.woff2') format('woff2'),
}

@font-face {
  font-family: 'Rubik';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local(''),
  url('fonts/rubik-v14-latin-italic.woff2') format('woff2'),
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${({ theme }) => css`
  html {
    font-size: 65.5%;
  }

  body,
  #__next {
    height: 100vh;
  }

  body {
    font-family: ${theme.font.family}};
  }
`}


`;
