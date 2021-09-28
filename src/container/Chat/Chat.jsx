import React from "react";
import { ChatShadow } from "./style";
import { ChatHeader, ChatFooter, ChatBody, InfoModal } from "core/components";

const Chat = () => {
    return (
        <ChatShadow>
            <ChatHeader className="ChatHeader" />
            <ChatBody className="ChatBot" />
            <ChatFooter className="ChatFooter" />
            <InfoModal />
        </ChatShadow>
    )
}

export default Chat