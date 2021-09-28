import { types } from "store/actions/theme.action";
import { createReducer } from "store/utils.js";
import { theme } from "constants/colors";

const initialState = {
    colors: {
        black: '#000000',
        white: '#F9F7F7',
        ...theme.default.colors
    },
}
const reducer = {
    [types.CHANGE_THEME]: (state, { data }) => { return { colors: { ...state.colors, ...theme[data].colors } } }
}

export default createReducer(initialState, reducer)