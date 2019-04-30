// @flow

import { FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODOS_FAIL } from "../constants"
import type { Action } from "../types"
import type { Ids } from "../types/todos"
import { combineReducers } from "redux"

const createList = (filter: string) => {
    const ids = (state: Ids = [], action: Action): Ids => {
        if (action.filter !== filter) {
            return state
        }
        switch (action.type) {
            case FETCH_TODOS_SUCCESS:
                return action.response.map(t => t.id)
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