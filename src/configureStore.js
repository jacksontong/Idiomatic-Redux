// @flow
import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(reducers, applyMiddleware(thunk, logger))

    return store
}

export default configureStore