export const types = {
    SET_CURRENT_MESSAGE: 'MESSAGES/SET_CURRENT_MESSAGE',
    SEND_MESSAGE: 'MESSAGES/SEND_MESSAGE',
    SEND_MESSAGE_INPUT: 'MESSAGES/SEND_MESSAGE_INPUT',
    ADD_MESSAGE: 'MESSAGES/ADD_MESSAGE',
    ADD_USER_FILE_MESSAGE: 'MESSAGES/ADD_USER_FILE_MESSAGE',
    SET_LOADING: 'MESSAGES/SET_LOADING',
    SET_WORKER_NAME: 'MESSAGES/SET_WORKER_NAME',
    FAILED_FILE_MESSAGE: 'MESSAGES/FAILED_FILE_MESSAGE',
}

export const actions = {
    setCurrentMessage: data => ({ type: types.SET_CURRENT_MESSAGE, data }),
    sendMessage: data => ({ type: types.SEND_MESSAGE, data }),
    sendMessageInput: data => ({ type: types.SEND_MESSAGE_INPUT, data }),
    addMessage: data => ({ type: types.ADD_MESSAGE, data }),
    addUserFileMessage: data => ({ type: types.ADD_USER_FILE_MESSAGE, data }),
    setLoading: data => ({ type: types.SET_LOADING, data }),
    setWorkerName: data => ({ type: types.SET_WORKER_NAME, data }),
    failedFileMessage: data => ({ type: types.FAILED_FILE_MESSAGE, data }),
}
