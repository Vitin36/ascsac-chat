import { padding } from "constants/spaces";
import styled from "styled-components";
import Scroll from 'react-scroll'

export const Container = styled(Scroll.Element)`
    padding: ${padding.s};
    background: #ffffff;
    height: 340px;
    overflow: auto;
`