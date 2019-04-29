// @flow
import { loadState, saveState } from "./localStorage";
import { createStore } from "redux";
import reducers from "./reducers";
import throttle from "lodash/throttle";

const configureStore = () => {
    const initialState = loadState()
    const store = createStore(reducers, initialState)

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000))

    return store
}

export default configureStore