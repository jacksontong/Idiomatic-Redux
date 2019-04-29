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
    +allIds: Ids
}

export type TodosState = {
    +todos: TodosById
}

export type TodosAction = 
    | { type: typeof ADD_TODO, +id: Id, +text: Text }
    | { type: typeof TOGGLE_TODO, +id: Id }
    | { type: typeof RECEIVE_TODOS, +filter: string, +response: Todo[] }