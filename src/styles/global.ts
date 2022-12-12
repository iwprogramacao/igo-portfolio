import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  .wrapper {
    width: 100%;
    max-width: 70rem;
    padding: 2rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 800px) {
    .wrapper {

    }
  }
`;
