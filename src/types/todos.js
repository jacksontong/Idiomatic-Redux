// @flow
import { RECEIVE_TODOS, REQUEST_TODOS } from "../constants"

export type Id = string

export type Ids = Array<Id>

export type Text = string

export type Todo = {
    +id: Id,
    +text: Text,
    +completed: boolean
}

export type ListId = {
    +ids: Ids,
    +isFetching: boolean
}

export type Todos = {
    [id: string]: Todo
}

export type Filter = "all" | "active" | "completed"

export type TodosState = {
    +byId: Todos,
    +listByFilter: {
        +[Filter]: ListId
    }
}

export type TodosAction =
    | { type: typeof RECEIVE_TODOS, +filter: string, +response: Todo[] }
    | { type: typeof REQUEST_TODOS, +filter: string }