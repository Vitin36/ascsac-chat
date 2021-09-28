import { createGlobalStyle } from "styled-components";
import { fontsFamily } from "constants/fonts";

export const GlobalStyle = createGlobalStyle`
    body {
        ${({ fontFamily }) => fontsFamily[fontFamily] }
    }
`