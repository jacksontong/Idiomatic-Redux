// @flow
import {
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_FAIL,
    ADD_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS
} from "../constants"

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

export type TodoResponse = {
    +result: Id,
    +entities: {
        +todos: Todos
    }
}

export type TodosResponse = {
    +result: Ids,
    +entities: {
        +todos: Todos
    }
}

export type ToggleTodoSuccessAction = {
    type: typeof TOGGLE_TODO_SUCCESS,
    +response: TodoResponse
}

export type FetchTodoSuccessAction = {
    type: typeof FETCH_TODOS_SUCCESS,
    +filter: string,
    +response: TodosResponse
}

export type AddTodoSuccessAction = {
    type: typeof ADD_TODO_SUCCESS,
    +response: TodoResponse
}

export type TodoRequestActions =
    | FetchTodoSuccessAction
    | AddTodoSuccessAction
    | ToggleTodoSuccessAction

export type TodosAction =
    | TodoRequestActions
    | { type: typeof FETCH_TODOS_REQUEST, +filter: string }
    | { type: typeof FETCH_TODOS_FAIL, +filter: string, +message: string }