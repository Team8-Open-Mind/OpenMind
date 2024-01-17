import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --root-z-index: 1;
    --portal-z-index: 2;
  }

  #portal {
    position: fixed;
    z-index: 2;
  }

  h1,
  h2,
  h3 {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
  }

  h1 {
    font-size: 4rem;
    line-height: normal;
  }

  h2 {
    font-size: 3.2rem;
    line-height: 4rem; /* 125% */
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3rem; /* 125% */
  }
`}
`;

export default GlobalStyle;
