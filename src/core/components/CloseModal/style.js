import styled from "styled-components";
import Modal from "react-overlays/Modal";
import { padding } from "constants/spaces";

export const Backdrop = styled.div`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    border-radius: 6px;
`


export const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.16);
    width: 350px;
    border-radius: 6px;
`;


export const ModalHeader = styled.div`
    border-bottom: 1px solid #B7B7B7;
    padding: ${padding.s}; 
    display: flex;
    align-items: center;

    & button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

export const ModalTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    width: 100%;
`

export const ModalBody = styled.div`
    padding: ${padding.s};
    min-height: 150px;
    font-size: 13px;
    font-weight: 400;
`

export const ModalFooter = styled.div` 
    padding: ${padding.s}; 
    border-top: 1px solid #B7B7B7;
`

export const ModalFooterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
