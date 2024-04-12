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
        font-family:'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.font};
    }

    a {
        text-decoration: none;
        color: ${theme.color.font};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.color.font};
    }


    section:nth-of-type(odd) {
        background-color: ${theme.color.primary};
    }

    section:nth-of-type(even) {
        background-color: ${theme.color.secondary};
    } 
    section {
        padding: 100px  0 100px;

        @media ${theme.media.tablet} {
            padding: 80px 0 80px;

            &:first-of-type {
                /* background-color: red; */
                padding-top: 100px;
            }
        }

        @media ${theme.media.mobile} {
            padding: 30px 0 30px;

            &:first-of-type {
                /* background-color: red; */
                padding-top: 100px;
            }
        }
    }

    h2 {
        color: ${theme.color.font};
    }
`;
