// @flow

import { RECEIVE_TODOS, REQUEST_TODOS } from "../constants"
import type { Action } from "../types"
import type { Ids } from "../types/todos"
import { combineReducers } from "redux"

const createList = (filter: string) => {
    const ids = (state: Ids = [], action: Action): Ids => {
        if (action.filter !== filter) {
            return state
        }
        switch (action.type) {
            case RECEIVE_TODOS:
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
            case REQUEST_TODOS:
                return true
            case RECEIVE_TODOS:
                return false
            default:
                return state
        }
    }

    return combineReducers({
        ids,
        isFetching
    })
}

export default createList