// @flow
import TodoApp from "./TodoApp"
import { Provider } from "react-redux"
import React from "react"
import type { Store } from "../types"

export type Props = {
    store: Store
}

const Root = ({ store }: Props) => (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
)

export default Root