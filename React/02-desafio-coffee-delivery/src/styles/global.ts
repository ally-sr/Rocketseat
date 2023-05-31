import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.background};
        --webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body,input,textarea,button{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
    }
    h1{
        font-family:'Baloo 2', cursive;
        color:${props => props.theme.baseTitle};
    }

`