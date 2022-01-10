import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStyleProps = {};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothibg: antialiased;
      -moz-osx-font-smoothing: antialiased;
  
      &::before,
      &::afeter {
        box-sizing: inherit
      }
    }
  `;

export default GlobalStyles;
