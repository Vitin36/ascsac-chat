import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)