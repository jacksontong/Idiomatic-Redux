// @flow
import { ADD_TODO_SUCCESS, FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, TOGGLE_TODO, FETCH_TODOS_FAIL } from "../constants"
import type { Filter, Id, Text, TodosAction } from '../types/todos'
import * as fromApi from "../api"
import type { Dispatch } from "../types"
import type { Todos } from "../types/api"

export const addTodo = (text: Text) => async (dispatch: Dispatch) => {
    const response = await fromApi.addTodo(text)
    dispatch({
        type: ADD_TODO_SUCCESS,
        response
    })
}

export const toggleTodo = (id: Id): TodosAction => ({
    type: TOGGLE_TODO,
    id
})

export const receiveTodos = (filter: string, response: Todos): TodosAction => ({
    type: FETCH_TODOS_SUCCESS,
    filter,
    response
})

export const fetchTodos = (filter: Filter) => async (dispatch: Dispatch) => {
    dispatch({type: FETCH_TODOS_REQUEST, filter})
    try {
        const todos = await fromApi.fetchTodos(filter)
        dispatch(receiveTodos(filter, todos))
    } catch (error) {
        dispatch({
            type: FETCH_TODOS_FAIL,
            message: error.message || "something went wrong",
            filter
        })
    }
}