import React from "react"
import { Container, Row, Column$1, Column$2, Input, SendButton, SendIcon } from "./style"
import sendIcon from 'assets/images/sendIcon.svg'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actions } from "store/actions/messages.actions"

const ChatFooter = () => {
    const dispatch = useDispatch()
    const { currentMessage } = useSelector(state => state.messages)

    const handleInputChange = (event) => {
        const { target: { value } } = event
        if (value !== '\n') {
            dispatch(actions.setCurrentMessage(event.target.value))
        }
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if (currentMessage.length > 0) {
            dispatch(actions.sendMessage(currentMessage))
            dispatch(actions.setCurrentMessage(''))
        }
    }

    return (
        <Container>
            <Row>
                <Column$1>
                    <Input
                        placeholder="Digite uma mensagem aqui"
                        value={currentMessage}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    >
                    </Input>
                </Column$1>
                <Column$2>
                    <SendButton onClick={handleSubmit}>
                        <SendIcon src={sendIcon} />
                    </SendButton>
                </Column$2>
            </Row>
        </Container>
    )
}

export default ChatFooter