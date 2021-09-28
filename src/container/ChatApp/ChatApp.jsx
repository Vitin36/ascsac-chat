import React, { useEffect } from "react";
import Chat from "container/Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { actions as themeActions } from 'store/actions/theme.action'
import { actions as configActions } from 'store/actions/config.actions'
import ClosedChat from "../ClosedChat/ClosedChat";

const ChatApp = ({ theme, displayCloseIcon, displayWorkerName, displaySubTitle, displayWorkerImage, displayMessageTime, displayMultiChannel }) => {
    const dispatch = useDispatch()
    const global = useSelector(state => state.global)

    useEffect(() => dispatch(themeActions.changeTheme(theme)), [theme])
    useEffect(() => dispatch(configActions.changeDisplayCloseIcon(displayCloseIcon)), [displayCloseIcon])
    useEffect(() => dispatch(configActions.changeDisplayWorkerName(displayWorkerName)), [displayWorkerName])
    useEffect(() => dispatch(configActions.changeDisplaySubtitle(displaySubTitle)), [displaySubTitle])
    useEffect(() => dispatch(configActions.changeDisplayWorkerImage(displayWorkerImage)), [displayWorkerImage])
    useEffect(() => dispatch(configActions.changeDisplayMessageTime(displayMessageTime)), [displayMessageTime])
    useEffect(() => dispatch(configActions.changeDisplayMultiChannel(displayMultiChannel)), [displayMultiChannel])

    return (
        global.toggledChat ? <ClosedChat /> : <Chat />
    )
}

export default ChatApp