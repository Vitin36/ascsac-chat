import React from "react";
import worker from 'assets/images/worker.svg';
import { Container, Row, Text } from "./style";
import { actions } from "store/actions/global.actions";
import { useDispatch } from "react-redux";

const ClosedChat = () => {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(actions.toggleChat())
    
    return (
        <Container onClick={handleClick} className="ClosedChatContainer">
            <Row className="ClosedChatRow">
                <img src={worker} className="ClosedChatWorker" />
                <Text className="ClosedChatText">
                    Precisa de <span>Ajuda?</span>
                </Text>
            </Row>
        </Container>
    )
}

export default ClosedChat