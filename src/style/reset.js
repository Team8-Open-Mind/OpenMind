import { css } from 'styled-components';

const resetCss = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;

    font-size: 62.5%; /* 1rem = 10px */

    min-height: 100vh;

    button {
      border: none;
      cursor: pointer;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: unset;
      cursor: pointer;
    }

    input,
    textarea {
      outline: none;
      resize: none;
    }
  }
`;

export default resetCss;
