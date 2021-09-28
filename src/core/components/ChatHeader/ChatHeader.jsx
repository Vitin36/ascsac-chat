import React from "react"
import downArrow from 'assets/images/downArrow.svg'
import closeIcon from 'assets/images/closeIcon.svg'
import worker from 'assets/images/worker.svg'
import multiChannel from 'assets/images/multiChannel.svg'
import { Container, Row, Text, SubText, Button, WorkerImage, MultiChannel } from "./style"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "store/actions/global.actions"

const ChatHeader = () => {
    const config = useSelector(state => state.config)
    const dispatch = useDispatch()

    const renderWorkerName = () =>
    (config.displayWorkerName ?
        <Text className="ChatHeaderText">
            Você está falando com <span className="ChatHeaderWorker">Sofia</span>
        </Text>
        : undefined
    )

    const renderButtonIcon = () => {
        const handleClick = () => config.displayCloseIcon ? dispatch(actions.setCloseModal(true)) : dispatch(actions.toggleChat())
        return (
            <Button className="ChatHeaderButton" onClick={handleClick}>
                <img src={config.displayCloseIcon ? closeIcon : downArrow} />
            </Button>
        )
    }

    const renderSubText = () => (
        config.displaySubTitle ?
            <SubText className="ChatHeaderSubText">Atendente virtual da ASC Brazil</SubText>
            : null
    )

    const renderWorkerImage = () => (
        config.displayWorkerImage ?
            <WorkerImage src={worker} />
            : null
    )

    const renderDisplayMultiChannel = () => (
        config.displayMultiChannel ?
            <MultiChannel src={multiChannel} />
            : null
    )

    return (
        <Container className="ChatHeaderContainer" multiChannel={config.displayMultiChannel}>
            {renderDisplayMultiChannel()}
            <Row className="ChatHeaderRow">
                {renderWorkerName()}
                {renderSubText()}
                {renderWorkerImage()}
                {renderButtonIcon()}
            </Row>
        </Container>
    )
}

export default ChatHeader