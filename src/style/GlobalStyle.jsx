import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --root-z-index: 1;
    --portal-z-index: 2;
  }

  #portal {
    position: fixed;
    z-index: 2;
  }
`;

export default GlobalStyle;
