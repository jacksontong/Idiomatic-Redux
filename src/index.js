// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

const element = document.getElementById('root')
if (!element) {
    throw new Error("element root does not exist")
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <TodoApp />
    </Provider>, 
    element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
