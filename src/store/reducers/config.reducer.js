import { types } from "store/actions/config.actions";
import { createReducer } from "store/utils.js";

const initialState = {
    displayWorkerName: true,
    displayCloseIcon: false,
    displaySubTitle: false,
    displayWorkerImage: false,
    displayMessageTime: false,
    displayMultiChannel: false,
}

const reducer = {
    [types.CHANGE_DISPLAY_CLOSE_ICON]: (state, { data }) => { return { ...state, displayCloseIcon: setBool(data) } },
    [types.CHANGE_DISPLAY_WORKER_NAME]: (state, { data }) => { return { ...state, displayWorkerName: setBool(data) } },
    [types.CHANGE_DISPLAY_SUBTITLE]: (state, { data }) => { return { ...state, displaySubTitle: setBool(data) } },
    [types.CHANGE_DISPLAY_WORKER_IMAGE]: (state, { data }) => { return { ...state, displayWorkerImage: setBool(data) } },
    [types.CHANGE_DISPLAY_MESSAGE_TIME]: (state, { data }) => { return { ...state, displayMessageTime: setBool(data) } },
    [types.CHANGE_DISPLAY_MULTI_CHANNEL]: (state, { data }) => { return { ...state, displayMultiChannel: setBool(data) } },
}

const setBool = (bool) => bool === 'true' ? true : bool === 'false' ? false : false


export default createReducer(initialState, reducer)