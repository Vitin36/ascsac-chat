import React from "react"
import worker from 'assets/images/worker.svg'
import parse from "html-react-parser"
import { Container, Row, StyledMessage, Time, WorkerImage, WorkerName} from "./style"
import { useSelector } from "react-redux"

export const Message = ({ isWorker, message, time, workerName }) => {
    const { displayWorkerImage, displayMessageTime, displayWorkerName } = useSelector(state => state.config)

    const renderWorkerImage = () => (
        isWorker && displayWorkerImage ? <WorkerImage src={worker} /> : undefined
    )

    const renderTime = () => {
        return (
            displayMessageTime ? <Row isWorker={isWorker}><Time>{time}</Time></Row> : undefined
        )
    }

    const renderMessage = () => {
        return (
            <StyledMessage isWorker={isWorker}>
                {displayWorkerName && isWorker ? <WorkerName>{workerName}</WorkerName> : undefined}
                {parse(message)}
            </StyledMessage>
        )
    }

    return (
        <Container>
            <Row isWorker={isWorker}>
                {renderWorkerImage()}
                {renderMessage()}
                {/* <StyledMessage isWorker={isWorker}>{parse(message)}</StyledMessage> */}
            </Row>
            {renderTime()}
        </Container>
    )
}