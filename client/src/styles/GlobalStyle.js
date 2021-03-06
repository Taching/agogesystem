import { createGlobalStyle } from "styled-components";
import { color } from "../styles/Theme";
const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before
     {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 10px;
    }
    body {
        @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        color: #777;
        a:hover {
            color: ${color.red};
        }

    }
`;

export default GlobalStyle;
