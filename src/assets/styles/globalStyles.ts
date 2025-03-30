import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        color: #333;
        margin: 0;
        font-size: 14px;
        min-width: 375px;
        min-height: 100vh;
        font-family:
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        background-color: #eff6ff;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media (min-width: 768px) {
            font-size: 14px;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    p {
        margin-top: 0;
    }
`;
