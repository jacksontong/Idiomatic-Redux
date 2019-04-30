// @flow

import type { Todos } from "../types/todos"
import type { Action } from "../types"
import _ from 'lodash'

const byId = (state: Todos = {}, action: Action): Todos => {
    if (action.response) {
        return {
            ...state,
            ..._.get(action.response, 'entities.todos')
        }
    }
    return state
}

export default byId