// @flow
import { ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO } from "../constants"
import type { Id, Text, Todo, TodosAction } from '../types/todos'
import { v4 } from 'node-uuid'

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