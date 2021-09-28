export const types = {
    SET_CURRENT_MESSAGE: 'MESSAGES/SET_CURRENT_MESSAGE',
    SEND_MESSAGE: 'MESSAGES/SEND_MESSAGE',
    ADD_MESSAGE: 'MESSAGES/ADD_MESSAGE',
    SET_LOADING: 'MESSAGES/SET_LOADING',
    SET_WORKER_NAME: 'MESSAGES/SET_WORKER_NAME',
}

export const actions = {
    setCurrentMessage: data => ({ type: types.SET_CURRENT_MESSAGE, data }),
    sendMessage: data => ({ type: types.SEND_MESSAGE, data }),
    addMessage: data => ({ type: types.ADD_MESSAGE, data }),
    setLoading: data => ({ type: types.SET_LOADING, data }),
    setWorkerName: data => ({ type: types.SET_WORKER_NAME, data })
}
