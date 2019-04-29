// @flow
import { loadState, saveState } from "./localStorage";
import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers";
import throttle from "lodash/throttle";
import logger from 'redux-logger'

const configureStore = () => {
    const initialState = loadState()
    const store = createStore(reducers, initialState, applyMiddleware(logger))

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000))

    return store
}

export default configureStore