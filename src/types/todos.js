// @flow
import {
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_FAIL,
    ADD_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS, ADD_TODO_REQUEST, TOGGLE_TODO_REQUEST
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

export type AddTodoRequestAction = {
    type: typeof ADD_TODO_REQUEST,
    +text: Text
}

export type ToggleTodoRequestAction = {
    type: typeof TOGGLE_TODO_REQUEST,
    +id: Id
}

export type ToggleTodoSuccessAction = {
    type: typeof TOGGLE_TODO_SUCCESS,
    +response: TodoResponse
}

export type FetchTodosRequestAction = {
    type: typeof FETCH_TODOS_REQUEST,
    +filter: string
}

export type FetchTodosSuccessAction = {
    type: typeof FETCH_TODOS_SUCCESS,
    +filter: string,
    +response: TodosResponse
}

export type AddTodoSuccessAction = {
    type: typeof ADD_TODO_SUCCESS,
    +response: TodoResponse
}

export type TodoRequestActions =
    | FetchTodosSuccessAction
    | AddTodoSuccessAction
    | ToggleTodoSuccessAction

export type TodosAction =
    | TodoRequestActions
    | FetchTodosRequestAction
    | { type: typeof FETCH_TODOS_FAIL, +filter: string, +message: string }
    | AddTodoRequestAction
    | ToggleTodoRequestAction