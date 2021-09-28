import React from "react"
import { StyledButton } from "./style"

export const Button = ({ children, reverse, onClick, curved, spaced }) => {
    return (
        <StyledButton reverse={reverse} onClick={onClick} curved={curved} spaced={spaced}>{children}</StyledButton>
    )
}