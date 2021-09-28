import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const Theme = ({ children }) => {
    const currentTheme = useSelector(state => state.theme)
    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default Theme