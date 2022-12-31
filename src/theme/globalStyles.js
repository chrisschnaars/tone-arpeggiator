import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-bg-primary: #F7F5F3;
    --color-bg-muted: #EAE5E1;
    --color-button: var(--color-bg-muted);
    --color-button-hover: #E0D8D2;
    --color-bg-toggle: #FFF;
    --color-text-primary: #000609;
    --color-link: #000;
    --color-marker-default: #EAE5E1;
    --space-default: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg-primary: #282C35;
      --color-bg-muted: #3B414E;
      --color-bg-toggle: #5F687C;
      --color-text-primary: #fff;
      --color-link: #fff;
      --color-marker-default: #343A46;
    }
  }

  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--color-link);

    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
