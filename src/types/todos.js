// @flow
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODOS_FAIL } from "../constants"

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
    +isFetching: boolean,
    +errorMessage: string
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
    | { type: typeof FETCH_TODOS_SUCCESS, +filter: string, +response: Todo[] }
    | { type: typeof FETCH_TODOS_REQUEST, +filter: string }
    | { type: typeof FETCH_TODOS_FAIL, +filter: string, +message: string }