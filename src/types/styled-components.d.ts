import light from '../assets/styles/themes/light';

type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
