// @flow
import { ADD_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, TOGGLE_TODO, FETCH_TODOS_FAIL } from "../constants"
import type { Id, Text, Todo, TodosAction } from '../types/todos'
import { v4 } from 'node-uuid'
import { fetchTodos as apiFetchTodos } from "../api"
import type { Dispatch } from "../types"

export const addTodo = (text: Text): TodosAction => ({
    type: ADD_TODO,
    id: v4(),
    text
})

export const toggleTodo = (id: Id): TodosAction => ({
    type: TOGGLE_TODO,
    id
})

export const receiveTodos = (filter: string, response: Todo[]): TodosAction => ({
    type: FETCH_TODOS_SUCCESS,
    filter,
    response
})

export const fetchTodos = (filter: string) => async (dispatch: Dispatch) => {
    dispatch({type: FETCH_TODOS_REQUEST, filter})
    try {
        const todos = await apiFetchTodos(filter)
        dispatch(receiveTodos(filter, todos))
    } catch (error) {
        dispatch({
            type: FETCH_TODOS_FAIL,
            message: error.message || "something went wrong",
            filter
        })
    }
}