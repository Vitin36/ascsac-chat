import { fork } from "@redux-saga/core/effects";
import messageSaga from './messages.saga'
import serviceQueueSaga from './serviceQueue.saga'

export default function* rootSaga() {
    yield fork(messageSaga),
    yield fork(serviceQueueSaga)
}