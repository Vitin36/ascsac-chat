import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Container } from "./style"
import { Message } from 'components/Message/Message'
import { Loader } from 'components/Loader/Loader'
import Scroll from 'react-scroll'

const ChatBody = () => {
    const { isLoading, messages, workerName } = useSelector(state => state.messages)

    useEffect(() => {
        Scroll.scroller.scrollTo('scrollabeBottomElement', {
            duration: 100,
            smooth: true,
            containerId: 'scrollabeContainer',
        })
    }, [messages, isLoading])

    const renderMessages = () => (
        messages.map(({ message, isWorker, time }, key) =>
            <Message
                isWorker={isWorker}
                key={key}
                isWorker={isWorker}
                message={message}
                time={time}
                workerName={workerName}
            />
        )
    )

    const renderLoading = () => (
        isLoading ? <Loader /> : undefined
    )

    return (
        <Container id="scrollabeContainer">
            {renderMessages()}
            {renderLoading()}
            <Scroll.Element name="scrollabeBottomElement"></Scroll.Element>
        </Container>
    )
}

export default ChatBody