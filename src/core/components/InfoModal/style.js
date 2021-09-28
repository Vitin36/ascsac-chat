import styled from "styled-components"
import { padding } from "constants/spaces";
import { theme } from 'constants/colors'

export const StyledModal = styled.div`
    position: fixed;
    max-width: 350px;
    min-width: 250px;
    z-index: 1040;
    top: 15px;
    right: 15px;
    background-color: transparent;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.16);
    border-radius: 6px;
`;

export const StyledBackground = styled.div`
    display: flex;
    border-radius: 6px;
    padding: ${padding.xs} ${padding.s};
    font-size: 13px;
    align-items: center;
    ${({ isError }) => isError ? `background-color: ${theme.modal.error};` : undefined}
    ${({ isWarning }) => isWarning ? `background-color: ${theme.modal.warning};` : undefined}
    ${({ isSuccess }) => isSuccess ? `background-color: ${theme.modal.success};` : undefined}

    ${({ isError }) => isError ? `color: ${theme.modalText.error};` : undefined}
    ${({ isWarning }) => isWarning ? `color: ${theme.modalText.warning};` : undefined}
    ${({ isSuccess }) => isSuccess ? `color: ${theme.modalText.success};` : undefined}

    & button {
        width: 8px;
        height: 16px;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    & div{
        width: calc(100% - 8px);
    }
`