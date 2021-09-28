import React, { useRef } from "react"
import clip from 'assets/images/clip.svg'
import { StyledButton, ClipIcon, HiddenInput } from "./style"
import { useDispatch } from "react-redux"
import { actions } from "store/actions/messages.actions"

export const FileInput = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const openInput = () => {
        inputRef.current?.click()
    }

    const onChange = (e) => {
        dispatch(actions.sendMessageInput(e.target.files[0]))
    }

    return (
        <StyledButton onClick={openInput}>
            Anexar arquivo
            <ClipIcon src={clip} />
            <HiddenInput type="file" ref={inputRef} onChange={onChange} />
        </StyledButton>
    )
}