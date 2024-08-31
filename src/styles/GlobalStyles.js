import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #141414;
    color: #ffffff;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .container {
    display: flex;
    height: calc(100vh - 80px);
    width: 100%; /* Full width */
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      height: auto;
    }
  }
`;
