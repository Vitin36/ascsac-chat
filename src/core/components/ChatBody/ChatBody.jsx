import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Wrapper, Container } from "./style"
import { Message } from 'components/Message/Message'
import { Loader } from 'components/Loader/Loader'
import { ServiceQueue } from 'components/ServiceQueue/ServiceQueue'
import { ServiceEnded } from 'components/ServiceEnded/ServiceEnded'
import { FileInput } from "components/FileInput/FileInput"
import Scroll from 'react-scroll'

const ChatBody = () => {
    const { isLoading, messages, workerName } = useSelector(state => state.messages)
    const { isWaiting } = useSelector(state => state.serviceQueue)

    useEffect(() => {
        Scroll.scroller.scrollTo('scrollabeBottomElement', {
            duration: 100,
            smooth: true,
            containerId: 'scrollabeContainer',
        })
    }, [messages, isLoading])

    const renderMessages = () => (
        messages.map(({ message, isWorker, time, requestFile, isFile, error, type }, key) =>
            <Message
                isWorker={isWorker}
                key={key}
                isWorker={isWorker}
                message={message}
                time={time}
                workerName={workerName}
                isFile={isFile}
                error={error}
                type={type}
            >
                {requestFile ? <FileInput /> : undefined}
            </Message>
        )
    )

    const renderLoading = () => (
        isLoading ? <Loader /> : undefined
    )

    const renderContent = () => (
        isWaiting ? <ServiceQueue /> :
            <>
                {renderMessages()}
                {renderLoading()}
            </>
    )

    return (
        <Container id="scrollabeContainer">
            <Wrapper centered={isWaiting}>
                {renderContent()}
                <Scroll.Element name="scrollabeBottomElement"></Scroll.Element>
            </Wrapper>
        </Container>
    )
}

export default ChatBody