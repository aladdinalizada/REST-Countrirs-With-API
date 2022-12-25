import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    button, input, select {
        border: none;
        outline: transparent;
    }

    button, select {
        cursor: pointer;
    }
`;
