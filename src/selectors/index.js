// @flow
import { createSelector } from "reselect"
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from "../constants"
import type { State } from '../types'
import type { Todos } from '../types/todos'
import type { VisibilityFilter } from '../types/visibilityFilter'

const getTodos = ({ todos }: State) => todos

const getVisibilityFilter = ({ visibilityFilter }: State) => visibilityFilter

export default createSelector(
    [ getTodos, getVisibilityFilter ],
    (todos: Todos, filter: VisibilityFilter) => {
        switch (filter) {
            case SHOW_ACTIVE:
                return todos.filter(t => !t.completed)
            case SHOW_COMPLETED:
                return todos.filter(t => t.completed)
            case SHOW_ALL:
            default:
                return todos
        }
    }
)