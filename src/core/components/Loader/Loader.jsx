import React from "react"
import { Row, WorkerImage, StyledLoader } from "./style"
import worker from 'assets/images/worker.svg'

export const Loader = () => {
    return (
        <Row>
            <WorkerImage src={worker} />
            <StyledLoader />
        </Row>
    )
}