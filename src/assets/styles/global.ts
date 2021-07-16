import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 65.5%;
  }

  body, #__next {
    height: 100vh;
  }

  body {
    font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI',
     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
