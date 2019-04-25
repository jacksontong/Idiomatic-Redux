// @flow
import { ADD_TODO, TOGGLE_TODO } from "../constants"
import type { Id, Text } from '../types/todos'
import type { Action } from '../types'

let globalId: Id = 0
export const addTodo = (text: Text): Action => ({
    type: ADD_TODO,
    id: globalId++,
    text
})

export const toggleTodo = (id: Id): Action => ({
    type: TOGGLE_TODO,
    id
})