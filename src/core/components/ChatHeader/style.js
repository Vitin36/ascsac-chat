import styled from "styled-components";
import { padding } from "constants/spaces";

export const Container = styled.div`
    border-radius: 25px 0 0 0;
    padding: ${padding.m};
    background: ${({ theme }) => theme.colors.primary};
`

export const Row = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 48px;
` 

export const Text = styled.h3`
    padding: 0.25em;
    font-size: 13px;
    color: #ffffff;
    font-weight: bold;
    
    & span {
        font-weight: 400;
    }
`

export const SubText = styled.h4`
    font-size: 10px;
    color: #ffffff;
    font-weight: 400;
`

export const Button = styled.button`
    border: 0;
    background: transparent;
    position: absolute;
    right: 0;

    & :hover {
        cursor: pointer;
    }
`

export const WorkerImage = styled.img`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
`