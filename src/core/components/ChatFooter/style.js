import styled from "styled-components";
import SVG from "react-inlinesvg"
import { padding } from "constants/spaces";

export const Container = styled.div`
    min-height: 48px;
    max-height: 64px;
    position: relative;
    padding: ${padding.xs} ${padding.s};
    border-top: 1px solid ${({theme}) => theme.colors.primary};
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    width: 100%;
`

export const Column$1 = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Column$2 = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const SendButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;

    img {
        fill: ${({theme}) => theme.colors.primary};
    }
`

export const SendIcon = styled(SVG)`
    path{
        fill: ${({theme}) => theme.colors.primary};
    }
`

export const Input = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    resize: none;
    outline: none;
    transform: translateY(8px);

    & ::placeholder {
        color: #C1C1C1;
    }
`