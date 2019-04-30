// @flow
import { ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO } from "../constants"

export type Id = string

export type Ids = Array<Id>

export type Text = string

export type Todo = {
    +id: Id,
    +text: Text,
    +completed: boolean
}

export type Todos = {
    [id: string]: Todo
}

export type TodosById = {
    +byId: Todos,
    +idsByFilter: {
        +all: Ids,
        +active: Ids,
        +completed: Ids
    }
}

export type TodosState = {
    +todos: TodosById
}

export type TodosAction = { type: typeof RECEIVE_TODOS, +filter: string, +response: Todo[] }