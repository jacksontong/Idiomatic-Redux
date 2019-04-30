// @flow
import { ADD_TODO, RECEIVE_TODOS, REQUEST_TODOS, TOGGLE_TODO } from "../constants"
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
    type: RECEIVE_TODOS,
    filter,
    response
})

export const fetchTodos = (filter: string) => async (dispatch: Dispatch) => {
    dispatch({type: REQUEST_TODOS, filter})
    const todos = await apiFetchTodos(filter)
    dispatch(receiveTodos(filter, todos))
}