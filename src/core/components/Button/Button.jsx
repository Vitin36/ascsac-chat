import React from "react"
import { StyledButton } from "./style"

export const Button = ({ children, reverse, onClick }) => {
    return (
        <StyledButton reverse={reverse} onClick={onClick}>{children}</StyledButton>
    )
}