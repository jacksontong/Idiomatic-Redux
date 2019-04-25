// @flow
import { ADD_TODO, TOGGLE_TODO } from "../constants"

export type Id = number

export type Text = string

export type Todo = {
    +id: Id,
    +text: Text,
    +completed: boolean
}

export type Todos = Array<Todo>

export type TodosState = {
    +todos: Todos
}

export type TodosAction = 
    | { type: typeof ADD_TODO, +id: Id, +text: Text }
    | { type: typeof TOGGLE_TODO, +id: Id }