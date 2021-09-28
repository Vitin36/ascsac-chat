import { padding } from "constants/spaces"
import styled from "styled-components"

export const StyledButton = styled.button`
border: none;
border-radius: 6px;
padding: ${padding.xs} ${padding.s};
margin: 8px;
cursor: pointer;
${({ theme, reverse }) => reverse ?
    `
    background: transparent;
    color: ${theme.colors.primary};
    `
    :
    `
    background: ${theme.colors.primary};
    color: #ffffff;
    `
}
`