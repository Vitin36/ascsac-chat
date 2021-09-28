import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actions, types } from '../actions/messages.actions'
import { sendMessage } from 'provider/message/message.provider'
import { actions as globalActions } from '../actions/global.actions'

function* handleNewMessage({ data }) {
    try {
        yield put(actions.setLoading(true))
        const response = yield call(sendMessage, data)
        yield put(actions.addMessage(response.data.workerMessage))
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

function* saga() {
    yield all([
        takeLatest(types.SEND_MESSAGE, handleNewMessage),
    ])
}

export default saga