// @flow
import { RECEIVE_TODOS } from "../constants"

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

export type TodosState = {
    +byId: Todos,
    +listByFilter: {
        +all: Ids,
        +active: Ids,
        +completed: Ids
    }
}

export type TodosAction = { type: typeof RECEIVE_TODOS, +filter: string, +response: Todo[] }