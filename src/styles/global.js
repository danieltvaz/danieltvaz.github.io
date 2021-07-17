import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: ${({ theme }) => theme.background};
}

div {
    /* border: 1px solid red; */
}
`;

export default GlobalStyle;
