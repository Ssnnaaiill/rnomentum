import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


/**
 * GlobalStyle
 * @global base css configurations for rnomentum react app
 */

const GlobalStyle = createGlobalStyle`
  ${reset};

  /* FONTS */

  @font-face {
    font-family: 'stencil';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/stencil.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BareunBatang';
    font-style: normal;
    font-weight: 400;
    src:
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFM.woff') format('woff'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFM.woff2') format('woff2');
  }

  @font-face {
    font-family: 'BareunBatang';
    font-style: normal;
    font-weight: 700;
    src:
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFB.woff') format('woff'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFB.woff2') format('woff2');
  }

  @font-face {
    font-family: 'BareunBatang';
    font-style: normal;
    font-weight: 300;
    src:
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFL.woff') format('woff'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFL.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'BareunBatang';
    font-size: 1rem;
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://source.unsplash.com/random/pink);
    background-size: cover;
    background-color: #999;
    background-blend-mode: multiply;
  }`;

export default GlobalStyle;