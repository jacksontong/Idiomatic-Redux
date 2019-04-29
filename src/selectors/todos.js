// @flow
import { createSelector } from "reselect"
import type { Todo } from "../types/todos"
import type { State } from "../types"

const getAllTodos = ({ allIds, byId }: State) => allIds.map(id => byId[id])

const getVisibilityFilter = (_, filter) => filter

export const getVisibleTodos = createSelector(
    [ getAllTodos, getVisibilityFilter ],
    (state: [Todo], filter: string) => {
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