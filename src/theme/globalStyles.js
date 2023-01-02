import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-bg-primary: #F7F5F3;
    --color-bg-muted: #EAE5E1;
    --color-button: var(--color-bg-muted);
    --color-button-hover: #E0D8D2;
    --color-button-active: #D4C9BF;
    --color-text-primary: #1C1A17;
    --color-link: var(--color-text-primary);
    --color-marker-default: var(--color-bg-muted);
    --space-default: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg-primary: #282C35;
      --color-bg-muted: #3B414E;
      --color-button: var(--color-bg-muted);
      --color-button-hover: #485165;
      --color-button-active: #545F78;
      --color-text-primary: #F3F4F6;
      --color-link: var(--color-text-primary);
      --color-marker-default: var(--color-bg-muted);
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
