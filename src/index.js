// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'
import { loadState, saveState } from "./localStorage"
import throttle from 'lodash/throttle'

const element = document.getElementById('root')
if (!element) {
    throw new Error("element root does not exist")
}

const initialState = loadState()
const store = createStore(reducers, initialState)

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    })
}, 1000))

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, 
    element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
