// @flow
import TodoApp from "./TodoApp"
import { Provider } from "react-redux"
import React from "react"
import type { Store } from "../types"
import { BrowserRouter as Router , Route } from "react-router-dom"

export type Props = {
    store: Store
}

const Root = ({ store }: Props) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={TodoApp} />
        </Router>
    </Provider>
)

export default Root