// @flow
import { createSelector } from "reselect"
import type { Todos } from "../types/todos"
import type { State } from "../types"

const getState = (state: State) => state

const getVisibilityFilter = (_, filter) => filter

export const getVisibleTodos = createSelector(
    [ getState, getVisibilityFilter ],
    (state: Todos, filter: string) => {
        switch (filter) {
            case 'active':
                return state.filter(t => !t.completed)
            case 'completed':
                return state.filter(t => t.completed)
            case 'all':
                return state
            default:
                throw new Error(`Unknown filter ${filter}`)
        }
    }
)