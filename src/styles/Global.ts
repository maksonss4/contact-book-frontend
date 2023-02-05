import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
:root{
    --black: #201e2f;
    --white: #fdfefc;
    --green: #44bb57;
    --pink: #d1557f;   
    --yellow: #e7d64d; 
    --orange: #fb6b3b;
    --red: #df1827;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font: unset;
    font-family: 'Nunito Sans', sans-serif;
}

button{
    cursor: pointer;
}

body{
    background-color: var(--black);
}
`;
