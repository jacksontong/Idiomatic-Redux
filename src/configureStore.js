// @flow
import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers";
import logger from 'redux-logger'

const configureStore = () => {
    const store = createStore(reducers, applyMiddleware(logger))

    return store
}

export default configureStore