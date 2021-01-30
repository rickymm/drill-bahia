import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * { 
    -webkit-font-smoothing: antialiased;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: ${theme.colors.grey};
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
