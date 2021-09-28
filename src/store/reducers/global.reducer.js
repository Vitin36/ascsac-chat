import { types } from "store/actions/global.actions";
import { createReducer } from "store/utils.js";

const initialState = {
    toggledChat: false,
    closeModal: false,
    hasError: false,
    hasWarning: false,
    hasSuccess: false,
    infoMessage: '',
}

const reducer = {
    [types.TOGGLE_CHAT]: (state) => { return { ...state, toggledChat: !state.toggledChat } },
    [types.SET_INFO_MESSAGE]: (state, { data }) => { return { ...state, infoMessage: data } },
    [types.SET_HAS_ERROR]: (state, { data }) => { return { ...state, hasError: data } },
    [types.SET_HAS_WARNING]: (state, { data }) => { return { ...state, hasWarning: data } },
    [types.SET_HAS_SUCCESS]: (state, { data }) => { return { ...state, hasSuccess: data } },
    [types.SET_CLOSE_MODAL]: (state, { data }) => { return { ...state, closeModal: data } },
}

export default createReducer(initialState, reducer)