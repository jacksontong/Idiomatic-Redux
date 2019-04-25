// @flow
import { ADD_TODO, TOGGLE_TODO } from "../constants"
import type { Todos, Id, Text, Todo } from '../types/todos'
import type { Action } from '../types'

const addTodo = (id: Id, text: Text): Todo => ({
    id,
    text,
    completed: false
})

const toggleTodo = (id: Id, todos: Todos): Todos => 
    todos.filter(t => t.id !== id ? t : { ...t, completed: !t.completed })

const todos = (
    state: Todos = [],
    action: Action
): Todos => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                addTodo(action.id, action.text)
            ]
        case TOGGLE_TODO:
            return toggleTodo(action.id, state)
        default:
            return state
    }
}