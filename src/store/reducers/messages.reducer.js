import { types } from "store/actions/messages.actions";
import { createReducer } from "store/utils.js";
import dateFormat from 'dateformat'

const initialState = {
    currentMessage: '',
    workerName: 'SOFIA',
    messages: [
        { isWorker: true, message: 'Olá, qual o seu nome ?', time: '28/09/2021 03:21:55' },
        { isWorker: false, message: 'Gabriel', time: '28/09/2021 03:22:00' },
        { isWorker: true, message: 'Seu protocolo de atendimento é 202000099551<br><br>É sempre um prazer em te atender <b>Gabriel</b><br><br> Em que posso ajudar ?', time: '28/09/2021 03:22:15' },
    ],
    isLoading: false,
}

const reducer = {
    [types.SET_CURRENT_MESSAGE]: (state, { data }) => { return { ...state, currentMessage: data } },
    [types.SET_LOADING]: (state, { data }) => { return { ...state, isLoading: data } },
    [types.SET_WORKER_NAME]: (state, { data }) => { return { ...state, workerName: data.toUpperCase() } },
    [types.SEND_MESSAGE]: (state, { data }) => {
        return {
            ...state,
            messages: [...state.messages, {
                isWorker: false,
                message: data,
                time: getDate()
            }]
        }
    },
    [types.ADD_MESSAGE]: (state, { data }) => {
        return {
            ...state,
            messages: [...state.messages, {
                isWorker: true,
                time: getDate(),
                ...data
            }]
        }
    },
    [types.ADD_USER_FILE_MESSAGE]: (state, { data }) => {
        return {
            ...state,
            messages: [...state.messages, {
                isWorker: false,
                time: getDate(),
                ...data
            }]
        }
    },
    [types.FAILED_FILE_MESSAGE]: (state, { data }) => {
        state.messages[state.messages.length - 1].error = true
        return {
            ...state,
            messages: [...state.messages, {
                isWorker: true,
                time: getDate(),
                ...data
            }]
        }
    },
}

const getDate = () => {
    const now = new Date()
    return dateFormat(now, 'dd/mm/yyyy HH:MM:ss')
}

export default createReducer(initialState, reducer)