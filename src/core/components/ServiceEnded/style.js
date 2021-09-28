import styled from "styled-components"
import { Button } from "components/Button/Button"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & ${Button} {
        margin-left: 4px;
        margin-right: 4px;
    }
`

export const Title = styled.h3`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 56px;
`

export const Text = styled.h2`
    font-size: 13px;
    font-weight: 400;
    & span {
        font-weight: 700;
    }
    margin-bottom: 18px;
    max-width: 250px;
    text-align: center;
`