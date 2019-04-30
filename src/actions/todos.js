// @flow
import {
    FETCH_TODOS_REQUEST,
    ADD_TODO_REQUEST, TOGGLE_TODO_REQUEST
} from "../constants"
import type { Filter, Id, Text, TodosAction } from '../types/todos'

export const addTodo = (text: Text): TodosAction => ({
    type: ADD_TODO_REQUEST,
    text
})

export const toggleTodo = (id: Id): TodosAction => ({
    type: TOGGLE_TODO_REQUEST,
    id
})

export const fetchTodos = (filter: Filter): TodosAction => ({
    type: FETCH_TODOS_REQUEST,
    filter
})