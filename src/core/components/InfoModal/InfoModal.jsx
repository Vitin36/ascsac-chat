import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { actions } from "store/actions/global.actions";
import { StyledModal, StyledBackground } from "./style"
import { theme } from 'constants/colors'

const InfoModal = () => {
    const { hasError, hasWarning, hasSuccess, infoMessage } = useSelector(state => state.global)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(actions.setHasError(false))
        dispatch(actions.setHasWarning(false))
        dispatch(actions.setHasSuccess(false))
    }

    const handleIconColor = () => {
        var color
        hasError ? color = theme.modalText.error : undefined
        hasWarning ? color = theme.modalText.warning : undefined
        hasSuccess ? color = theme.modalText.success : undefined

        return color
    }

    return (
        hasError || hasWarning || hasSuccess ?
            <StyledModal show={hasError}>
                <StyledBackground
                    isError={hasError}
                    isWarning={hasWarning}
                    isSuccess={hasSuccess}
                >
                    <div>{infoMessage}</div>
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
                            <text
                                id="X"
                                transform="translate(0 11)"
                                fill={handleIconColor()}
                                fontSize="10"
                                fontFamily="Poppins-Bold, Poppins"
                                fontWeight="700">
                                <tspan x="0" y="0">X</tspan>
                            </text>
                        </svg>
                    </button>
                </StyledBackground>
            </StyledModal>
            : <></>
    )
}

export default InfoModal