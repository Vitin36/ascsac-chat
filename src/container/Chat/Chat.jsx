import React from "react";
import { ChatShadow } from "./style";
import { ChatHeader, ChatFooter, ChatBody, InfoModal, CloseModal } from "core/components";
import { useSelector } from "react-redux";

const Chat = () => {
    const { closeModal } = useSelector(state => state.global)

    return (
        <ChatShadow>
            <ChatHeader className="ChatHeader" />
            <ChatBody className="ChatBot" />
            <ChatFooter className="ChatFooter" />
            <InfoModal />
            <CloseModal show={closeModal} />
        </ChatShadow>
    )
}

export default Chat