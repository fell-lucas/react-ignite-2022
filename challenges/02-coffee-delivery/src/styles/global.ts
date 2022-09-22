import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.baseBackground};
    color: ${(props) => props.theme.colors.baseText};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
    min-height: 100vh;
    font-family: Roboto, Inter, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    display: flex;
    justify-content: center;
  }

  #root {
    width: 1440px;
    padding: 0px calc(100% / 12);
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  h1, h3, p {
    line-height: 130%;
  }

  *::-webkit-scrollbar {
    width: 3px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brandPurple};
    border-radius: 5px;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.brandPurple} transparent;
  }
`;
