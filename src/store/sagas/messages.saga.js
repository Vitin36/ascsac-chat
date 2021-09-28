import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actions, types } from '../actions/messages.actions'
import { sendFileMessage, sendMessage } from 'provider/message/message.provider'
import { actions as globalActions } from '../actions/global.actions'

function* handleNewMessage({ data }) {
    try {
        yield put(actions.setLoading(true))
        const response = yield call(sendMessage, data)
        yield put(actions.addMessage(response.data))
        yield put(actions.setWorkerName(response.data.workerName))
    }
    catch (e) {
        yield put(globalActions.setInfoMessage('Houve um problema!'))
        yield put(globalActions.setHasError(true))
        console.log('caught error')
        console.log(e)
    }
    finally {
        yield put(actions.setLoading(false))
    }
}

function* handleNewFileMessage({ data }) {
    try {
        yield put(actions.setLoading(true))
        yield put(actions.addUserFileMessage({ message: data.name, isFile: true }))
        const response = yield call(sendFileMessage, data)
        yield put(actions.addMessage(response.data))
        yield put(actions.setWorkerName(response.data.workerName))
    }
    catch (e) {
        console.log('caught error')
        console.log(e)
        yield put(actions.failedFileMessage({ ...e.response.data, type: 'error' }))
    }
    finally {
        yield put(actions.setLoading(false))
    }
}

function* saga() {
    yield all([
        takeLatest(types.SEND_MESSAGE, handleNewMessage),
        takeLatest(types.SEND_MESSAGE_INPUT, handleNewFileMessage),
    ])
}

export default saga