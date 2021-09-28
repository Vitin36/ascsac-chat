import { padding } from "constants/spaces"
import styled from "styled-components"

export const StyledButton = styled.button`
    border: none;
    background: ${({theme}) => theme.colors.primary};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-top: 8px;
    border-radius: 6px;
    padding: ${padding.xs} ${padding.xs};
    cursor: pointer;
`

export const ClipIcon = styled.img`
    margin-left: 8px;
`

export const HiddenInput = styled.input`
    display: none;
    visible: hidden;
`