import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset and base */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    background: #181a22;
  }
  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background: #181a22;
    color: #f2f2f2;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.01em;
  }
  a {
    color: #00adee;
    text-decoration: none;
    transition: color 0.2s;
    &:hover, &:focus {
      color: #ff7e5f;
      text-decoration: underline;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 800;
    color: #00adee;
    margin-bottom: 0.7em;
    letter-spacing: 0.02em;
  }
  ul, ol {
    margin-left: 1.2em;
    margin-bottom: 1em;
  }
  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    border: none;
    outline: none;
    background: none;
  }
`;

export default GlobalStyle;
