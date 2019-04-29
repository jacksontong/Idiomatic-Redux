// @flow
import { createSelector } from "reselect"
import type { State } from '../types'
import type { Todos } from '../types/todos'

const getTodos = ({ todos }: State) => todos

const getVisibilityFilter = (_, filter) => filter

export default createSelector(
    [ getTodos, getVisibilityFilter ],
    (todos: Todos, filter: string) => {
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
)