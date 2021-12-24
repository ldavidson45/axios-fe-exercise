import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;

    :hover {
      cursor: pointer;
    }

    :disabled {
      cursor: default;
    }

  }
`;
 
export default GlobalStyle;