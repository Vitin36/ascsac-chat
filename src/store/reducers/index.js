import { combineReducers } from "redux";
import theme from './theme.reducer'
import config from './config.reducer'
import global from './global.reducer'
import messages from './messages.reducer'
import serviceQueue from './serviceQueue.reducer'

export const rootReducer = combineReducers({
    global,
    config,
    theme,
    messages,
    serviceQueue
})