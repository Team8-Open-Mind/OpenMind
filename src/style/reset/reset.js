import { css } from 'styled-components';

const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }

  html,
  body {
    padding: 0;
    margin: 0;

    font-size: 62.5%; /* 1rem = 10px */

    width: 100%;
    height: 100%;

    input,
    select,
    button {
      /* 운영체제 및 브라우저에 기본적으로 설정되어 있는 테마를 기반으로 요소를 표현할 때 사용한다.
        none 속성을 주면 기본으로 적용된 디자인을 초기화 한다. */
      -webkit-appearance: none; /* safari / chrome */
      -moz-appearance: none; /* Mozilla */
      appearance: none;

      border: 0;
      background: transparent;
    }

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
