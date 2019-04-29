// @flow

import type { Todo } from "../types/todos"
import type { Action } from "../types"
import { ADD_TODO, TOGGLE_TODO } from "../constants"

const todo = (state: Todo, action: Action): Todo => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

export default todo