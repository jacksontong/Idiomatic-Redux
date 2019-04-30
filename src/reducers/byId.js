// @flow

import type { Id, TodoRequestActions, Todos } from "../types/todos"

const byId = (state: Todos = {}, action: TodoRequestActions): Todos => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        }
    }
    return state
}

export default byId

export const getTodo = (state: Todos, id: Id) => state[id]