// @flow
import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers";
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const configureStore = () => {
    const middlewares = []

    const sagaMiddleware = createSagaMiddleware()
    middlewares.push(sagaMiddleware)

    if (process.env.NODE_ENV !== "production") {
        middlewares.push(logger)
    }

    const store = createStore(reducers, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)

    return store
}

export default configureStore