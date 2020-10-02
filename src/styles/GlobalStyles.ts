import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #ea3d3d;
    --font-family: 'Roboto', sans-serif;
    --transition: 0.6s ease !important;
    --body-background: var(--color-primary);
    --body-background-secondary: #35373a;

    --text-color: #ffe5e5;

    --scrol-thumb: #333;
    --scrol-bg: #89777a;

    --menu-hover: #787777;
    --menu-background: #35373a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
    transition: all var(--transition);
  }

  html, body, #root {
    scroll-behavior: smooth;
    height: 100vh;
    font-family: var(--font-family);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scrol-thumb);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrol-bg);
    border-radius: 4px;
    transition: var(--transition);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrol-thumb);
    transition: var(--transition);
  }

  a {
    transition: filter var(--transition);
    outline: none;
  }

  a:hover{
    transition: filter var(--transition);
    filter: brightness(1.2);
    outline: none;
  }
`;
