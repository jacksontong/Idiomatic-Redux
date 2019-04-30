// @flow

import type { Todos } from "../types/todos"
import type { Action } from "../types"
import { FETCH_TODOS_SUCCESS } from "../constants"

const byId = (state: Todos = {}, action: Action): Todos => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            const nextState = { ...state }
            action.response.forEach(t => {
                nextState[t.id] = t
            })
            return nextState
        default:
            return state
    }
}

export default byId