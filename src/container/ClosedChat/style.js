import { padding } from "constants/spaces";
import styled from "styled-components";

export const Container = styled.div`
    border-radius: 25px 0 0 0;
    padding: ${padding.s};
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Text = styled.h3`
    padding: 0.25em;
    font-size: 15px;
    color: #ffffff;
    font-weight: 400;
    
    & span {
        font-weight: 700;
    }
`