import { padding } from "constants/spaces"
import { theme as themeConstant } from "constants/colors"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const Row = styled.div`
    display: flex;
    justify-content: ${({ isWorker }) => isWorker ? 'flex-start' : 'flex-end'};
    align-items: center;
`

export const WorkerImage = styled.img`
    width: 100%;
    max-width: 32px;
`
export const WorkerName = styled.span`
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
`

export const StyledMessage = styled.div`
    font-weight: 400;
    font-size: 13px;
    border-radius: 10px 10px ${({ isWorker }) => isWorker ? `10px 0px` : `0px 10px`};
    background-color: ${({ theme, isWorker }) => isWorker ? '#F9F7F7' : theme.colors.messageColor};
    padding: ${padding.xs} ${padding.s};
    margin-left: 8px;
    text-align: ${({ isWorker }) => isWorker ? `left` : `right`};
    max-width: 80%;

    ${({ isFile }) => isFile ? 'text-decoration: underline;' : undefined}
    ${({ isFile, error }) => isFile && error ? 'text-decoration: line-through;' : undefined}
    ${({ type }) => type && themeConstant.modal[type] ? `background-color: ${themeConstant.modal[type]};` : undefined}
    ${({ type }) => type && themeConstant.modalText[type] ? `color: ${themeConstant.modalText[type]};` : undefined}

    & b {
        font-weight: 700;
    }
    
    & input[type='radio'] {
        display: none;
    }
      
    & label {
        font-weight: normal;
        position: relative;
    }
      
    & label:before {
        content: " ";
        display: inline-block;
        position: relative;
        top: 2.5px;
        margin: 0 5px 0 0;
        width: 10px;
        height: 10px;
        border-radius: 11px;
        border: 2px solid #707070;
        background-color: transparent;
    }
      
     & input[type=radio]:checked + label:after {
        border-radius: 11px;
        width: 12px;
        height: 12px;
        position: absolute;
        top: 4px;
        left: 1px;
        content: " ";
        display: block;
        background: ${({ theme }) => theme.colors.primary};
      }
`

export const Time = styled.span`
    font-size: 10px;
    color: rgba(0,0,0,0.47);
    font-weight: 400;
    margin-top: 5px;
`