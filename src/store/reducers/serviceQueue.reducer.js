import { types } from "store/actions/serviceQueue.action";
import { createReducer } from "store/utils.js";

const initialState = {
    isWaiting: true,
    currentPosition: 0,
    waitingTime: '00:00:00'
}

const reducer = {
    [types.SET_IS_WAITING]: (state, { data }) => { return { ...state, isWaiting: data } },
    [types.SET_CURRENT_POSITION]: (state, { data }) => { return { ...state, currentPosition: data } },
    [types.SET_WAITING_TIME]: (state, { data }) => { return { ...state, waitingTime: data } },
}

export default createReducer(initialState, reducer)