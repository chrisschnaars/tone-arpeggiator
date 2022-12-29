import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-bg-primary: #fff;
    --color-bg-muted: #eee;
    --color-text-primary: #000;
    --color-marker-default: #ddd;
    --space-default: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg-primary: #000;
      --color-bg-muted: #222;
      --color-text-primary: #fff;
      --color-marker-default: #333;
    }
  }

  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
