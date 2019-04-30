// @flow

import type { Ids, Todos } from "../types/todos"
import type { Action } from "../types"
import { RECEIVE_TODOS } from "../constants"
import { combineReducers } from "redux"

const byId = (state: Todos = {}, action: Action): Todos => {
    switch (action.type) {
        case RECEIVE_TODOS:
            const nextState = { ...state }
            action.response.forEach(t => {
                nextState[t.id] = t
            })
            return nextState
        default:
            return state
    }
}

const allIds = (state: Ids = [], action: Action): Ids => {
    if (action.filter !== 'all') {
        return state
    }
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.response.map(t => t.id)
        default:
            return state
    }
}

const activeIds = (state: Ids = [], action: Action): Ids => {
    if (action.filter !== 'active') {
        return state
    }
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.response.map(t => t.id)
        default:
            return state
    }
}

const completedIds = (state: Ids = [], action: Action): Ids => {
    if (action.filter !== 'completed') {
        return state
    }
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.response.map(t => t.id)
        default:
            return state
    }
}

const idsByFilter = combineReducers({
    'all': allIds,
    'active': activeIds,
    'completed': completedIds
})


export default combineReducers({
    byId,
    idsByFilter
})