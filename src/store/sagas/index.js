import { fork } from "@redux-saga/core/effects";
import messageSaga from './messages.saga'

export default function* rootSaga() {
    yield fork(messageSaga)
}