// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from "./configureStore";
import Root from "./components/Root"

const element = document.getElementById('root')
if (!element) {
    throw new Error("element root does not exist")
}

const store = configureStore()

ReactDOM.render(
    <Root store={store}/>,
    element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
