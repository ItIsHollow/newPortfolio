import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family:'Reddit Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.font};
    }

    a {
        text-decoration: none;
        color: ${theme.color.font};
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        color: ${theme.color.font};
    }


    section:nth-of-type(odd) {
        background-color: ${theme.color.primary};
    }

    section:nth-of-type(even) {
        background-color: ${theme.color.secondary};
    }

    /* section + section {
        padding-top: 100px;
    } */

    section {
        padding: 100px  0 140px;
    }

    h2 {
        color: ${theme.color.font};
    }
`;
