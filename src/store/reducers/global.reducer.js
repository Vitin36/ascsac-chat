import { types } from "store/actions/global.actions";
import { createReducer } from "store/utils.js";

const initialState = {
    toggledChat: true,
    closeModal: false,
    hasError: false,
    hasWarning: false,
    hasSuccess: false,
    infoMessage: '',
    defaultInactivityStart: 0,
    inactivityCounter: 0,
    isInactive: false,
}

const reducer = {
    [types.TOGGLE_CHAT]: (state) => { return { ...state, toggledChat: !state.toggledChat } },
    [types.SET_INFO_MESSAGE]: (state, { data }) => { return { ...state, infoMessage: data } },
    [types.SET_HAS_ERROR]: (state, { data }) => { return { ...state, hasError: data } },
    [types.SET_HAS_WARNING]: (state, { data }) => { return { ...state, hasWarning: data } },
    [types.SET_HAS_SUCCESS]: (state, { data }) => { return { ...state, hasSuccess: data } },
    [types.SET_CLOSE_MODAL]: (state, { data }) => { return { ...state, closeModal: data } },
    [types.SET_DEFAULT_INACTIVITY_START]: (state, { data }) => { return { ...state, defaultInactivityStart: parseInt(data) } },
    [types.SET_INACTIVITY_COUNTER]: (state, { data }) => { return { ...state, inactivityCounter: data } },
    [types.SET_IS_INACTIVE]: (state, { data }) => { return { ...state, isInactive: data } },
}

const parseInt = (data) => Number.parseInt(data)

export default createReducer(initialState, reducer)