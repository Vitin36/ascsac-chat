export const types = {
    TOGGLE_CHAT: 'GLOBAL/TOGGLE_CHAT',
    SET_INFO_MESSAGE: 'GLOBAL/SET_INFO_MESSAGE',
    SET_HAS_ERROR: 'GLOBAL/SET_HAS_ERROR',
    SET_HAS_WARNING: 'GLOBAL/SET_HAS_WARNING',
    SET_HAS_SUCCESS: 'GLOBAL/SET_HAS_SUCCESS',
    SET_CLOSE_MODAL: 'GLOBAL/SET_CLOSE_MODAL',
    SET_DEFAULT_INACTIVITY_START: 'GLOBAL/SET_DEFAULT_INACTIVITY_START',
    SET_INACTIVITY_COUNTER: 'GLOBAL/SET_INACTIVITY_COUNTER',
    SET_IS_INACTIVE: 'GLOBAL/SET_IS_INACTIVE',
}

export const actions = {
    toggleChat: () => ({ type: types.TOGGLE_CHAT }),
    setInfoMessage: data => ({ type: types.SET_INFO_MESSAGE, data }),
    setHasError: data => ({ type: types.SET_HAS_ERROR, data }),
    setHasWarning: data => ({ type: types.SET_HAS_WARNING, data }),
    setHasSuccess: data => ({ type: types.SET_HAS_SUCCESS, data }),
    setCloseModal: data => ({ type: types.SET_CLOSE_MODAL, data }),
    setDefaultInactivityStart: data => ({ type: types.SET_DEFAULT_INACTIVITY_START, data }),
    setInactivityCounter: data => ({ type: types.SET_INACTIVITY_COUNTER, data }),
    setIsInactive: data => ({ type: types.SET_IS_INACTIVE, data }),
}