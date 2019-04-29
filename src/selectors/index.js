// @flow
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from "../constants"
import type { Todos } from '../types/todos'

export default (todos: Todos, filter: string): Todos => {
    switch (filter) {
        case 'active':
            return todos.filter(t => !t.completed)
        case 'completed':
            return todos.filter(t => t.completed)
        case 'all':
        default:
            return todos
    }
}