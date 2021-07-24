import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: color 0.1s, background 0.1s;
}
body{
    background: ${({ theme }) => theme.background};
    font-family: 'Poppins', sans-serif;
}

div {
    /* border: 1px solid red; */
}
`;

export default GlobalStyle;
