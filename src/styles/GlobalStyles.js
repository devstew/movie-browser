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
    background-color: #141414; /* Dark background */
    color: #ffffff; /* White text for contrast */
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    overflow: hidden; /* Prevent scrolling of the body */
  }

  .container {
    display: flex;
    height: calc(100vh - 80px); /* Remaining height after accounting for the header */
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
