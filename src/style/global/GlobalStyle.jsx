import { createGlobalStyle, css } from 'styled-components';

import resetCss from '../reset/reset';

const GlobalStyle = createGlobalStyle`${css`
  ${resetCss}

  :root {
    --root-z-index: 1;
    --portal-z-index: 2;
  }

  #root {
    width: 100%;
    height: 100%;
    min-height: 100vh;

    z-index: var(--root-z-index, 1);

    background-color: ${({ theme }) => theme.color.Grayscale[20]};
  }

  #portal {
    position: fixed;
    z-index: var(--portal-z-index, 2);
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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .background-clip-text {
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`}
`;

export default GlobalStyle;
