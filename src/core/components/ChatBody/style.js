import { padding } from "constants/spaces";
import styled from "styled-components";
import Scroll from 'react-scroll'

export const Wrapper = styled.div`
    ${({ centered }) => centered ?
    `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    :
    undefined}
    overflow: auto;
    min-height: 100%;
`
export const Container = styled(Scroll.Element)`
    background: #ffffff;
    height: 340px;
    overflow: auto;
    padding: ${padding.s};
`