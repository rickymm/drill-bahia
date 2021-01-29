import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
  
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
