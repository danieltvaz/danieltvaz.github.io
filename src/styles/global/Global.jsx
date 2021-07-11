import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: "Ubuntu", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.5s, color 0.5s;
    
}
body{
    background: ${({ theme }) => theme.foreground};

}

`;

export { GlobalStyle };
