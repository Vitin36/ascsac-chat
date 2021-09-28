import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const WorkerImage = styled.img`
    width: 100%;
    max-width: 32px;
`

export const StyledLoader = styled.div`
    margin-left: 24px;
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000000;
    color: #000000;
    animation: dotFlashing 1s infinite linear alternate;
    animation-delay: 500ms;
  
    & ::before, & ::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
    }
  
    & ::before {
        left: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #000000;
        color: #000000;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 0s;
    }
  
    & ::after {
        left: 15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #000000;
        color: #000000;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 1s;
    }
  
    @keyframes dotFlashing {
        0% {
        background-color: #000000;
        }
        50%,
        100% {
        background-color: #00000024;
        }
    }
  
`