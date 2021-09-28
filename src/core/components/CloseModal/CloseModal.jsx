import React from "react"
import { useDispatch } from "react-redux";
import { actions } from "store/actions/global.actions";
import { Backdrop, StyledModal, ModalHeader, ModalBody, ModalFooter, ModalTitle, ModalFooterRow } from "./style"
import { Button } from 'components/Button/Button'

function CloseModal({ show }) {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(actions.setCloseModal(false))
    }

    const handleFullClose = () => {
        dispatch(actions.setCloseModal(false))
        dispatch(actions.toggleChat())
    }

    const renderBackdrop = (props) => <Backdrop {...props} />;

    return (
        <StyledModal
            show={show}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
        >
            <div className="ModalWrapper">
                <ModalHeader>
                    <ModalTitle>Abandonar atendimento</ModalTitle>
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M19.185,8.69,18.019,7.523l-4.665,4.665L8.69,7.523,7.523,8.69l4.665,4.665L7.523,18.019,8.69,19.185l4.665-4.665,4.665,4.665,1.166-1.166L14.52,13.354Z" transform="translate(-7.523 -7.523)" />
                        </svg>

                    </button>
                </ModalHeader>
                <ModalBody>
                    Deseja mesmo abandonar o atendimento ?
                </ModalBody>
                <ModalFooter>
                    <ModalFooterRow>
                        <Button onClick={handleFullClose}>Sim</Button>
                        <Button onClick={handleClose} reverse>Não</Button>
                    </ModalFooterRow>
                </ModalFooter>
            </div>
        </StyledModal>
    );
}

export default CloseModal