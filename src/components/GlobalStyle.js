import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "Noto Sans KR";
    font-size: 1rem;
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://source.unsplash.com/random);
    background-size: cover;
    background-color: #999;
    background-blend-mode: multiply;
  }`;

export default GlobalStyle;