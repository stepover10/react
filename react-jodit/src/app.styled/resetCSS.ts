import { css } from 'styled-components';

const resetCSS = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    //font: inherit;
    //font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, helvetica, Apple SD Gothic Neo, sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
    // def
    line-height: 1.3;
    // color: #383838;
    font-size: 1.45rem;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  html {
    user-select: none;
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.4);
  }

  body {
    line-height: 1.3;
    //max-width: 664px;
    margin: 0 auto;
    -webkit-text-size-adjust: none;
  }

  button {
    border: none;
    background: none;
  }

  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    text-decoration: none;
    color: #000;
  }

  button {
    color: #000;
  }

  b {
    font-weight: bold;
  }

  // html { font-size: 62.5%; // 1.2rem === 12px }
  /* clears the 'X' from Internet Explorer */

  input[type=search]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type=search]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input[type="search"], input[type="text"], input[type="password"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input {
    box-sizing: border-box;
    outline: none !important;
  }

  input,
  select {
    box-sizing: border-box;
    font-size: 16px !important;
  }

  button {
    outline: none;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    width: 100%;
  }
  
  ::placeholder {
    color: #c7c7c7;
    font-size: 14px;
  }
`;

export default resetCSS;
