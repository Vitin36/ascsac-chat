import { takeLatest, all, call, put } from 'redux-saga/effects'
import { actions, types } from 'store/actions/serviceQueue.action'
import { searchCurrentPosition } from 'provider/serviceQueue/serviceQueue.provider'

function* searchPosition({ data }) {
    try {
        const response = yield call(searchCurrentPosition, {})
        console.log(response.data)
        yield put(actions.setCurrentPosition(response.data.currentPosition))
        yield put(actions.setWaitingTime(response.data.waitingTime))
        yield put(actions.setIsWaiting(response.data.isWaiting))
    }
    catch (e) {
        console.log(e)
    }
}


function* saga() {
    yield all([
        takeLatest(types.SEARCH_CURRENT_POSITION, searchPosition),
    ])
}

export default saga