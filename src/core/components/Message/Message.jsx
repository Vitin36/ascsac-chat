import React from "react"
import worker from 'assets/images/worker.svg'
import parse from "html-react-parser"
import { Container, Row, StyledMessage, Time, WorkerImage, WorkerName } from "./style"
import { useSelector } from "react-redux"

export const Message = ({ isWorker, message, time, workerName, children, isFile, error, type }) => {
    const { displayWorkerImage, displayMessageTime, displayWorkerName } = useSelector(state => state.config)
    console.log(type)

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
            <StyledMessage isWorker={isWorker} isFile={isFile} error={error} type={type}>
                {displayWorkerName && isWorker ? <WorkerName>{workerName}</WorkerName> : undefined}
                {parse(message)}
                {children}
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