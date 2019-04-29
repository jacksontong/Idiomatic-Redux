// @flow
import { ADD_TODO, TOGGLE_TODO } from "../constants"
import type { Id, Text } from '../types/todos'
import type { Action } from '../types'
import { v4 } from 'node-uuid'

export const addTodo = (text: Text): Action => ({
    type: ADD_TODO,
    id: v4(),
    text
})

export const toggleTodo = (id: Id): Action => ({
    type: TOGGLE_TODO,
    id
})