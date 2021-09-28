export const types = {
    SET_IS_WAITING: 'SERVICE_QUEUE/SET_IS_WAITING',
    SET_CURRENT_POSITION: 'SERVICE_QUEUE/SET_CURRENT_POSITION',
    SET_WAITING_TIME: 'SERVICE_QUEUE/SET_WAITING_TIME',
    SEARCH_CURRENT_POSITION: 'SERVICE_QUEUE/SEARCH_CURRENT_POSITION',
}

export const actions = {
    setIsWaiting: data => ({ type: types.SET_IS_WAITING, data }),
    setCurrentPosition: data => ({ type: types.SET_CURRENT_POSITION, data }),
    setWaitingTime: data => ({ type: types.SET_WAITING_TIME, data }),
    searchCurrentPosition: () => ({ type: types.SEARCH_CURRENT_POSITION }),
}
