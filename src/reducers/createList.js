// @flow

import { FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODOS_FAIL, ADD_TODO_SUCCESS } from "../constants"
import type { Action } from "../types"
import type { Ids } from "../types/todos"
import { combineReducers } from "redux"

const createList = (filter: string) => {
    const ids = (state: Ids = [], action: Action): Ids => {
        switch (action.type) {
            case FETCH_TODOS_SUCCESS:
                return action.filter === filter ? action.response.map(t => t.id) : state
            case ADD_TODO_SUCCESS:
                return filter !== 'completed' ? [ ...state, action.response.id ] : state
            default:
                return state
        }
    }

    const isFetching = (state: boolean = false, action: Action): boolean => {
        if (action.filter !== filter) {
            return state
        }
        switch (action.type) {
            case FETCH_TODOS_REQUEST:
                return true
            case FETCH_TODOS_FAIL:
            case FETCH_TODOS_SUCCESS:
                return false
            default:
                return state
        }
    }

    const errorMessage = (state: ?string = null, action: Action): ?string => {
        if (action.filter !== filter) {
            return state
        }
        switch (action.type) {
            case FETCH_TODOS_FAIL:
                return action.message
            case FETCH_TODOS_REQUEST:
            case FETCH_TODOS_SUCCESS:
                return null
            default:
                return state
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    })
}

export default createList