// @flow

import type { Ids, Todos } from "../types/todos"
import type { Action } from "../types"
import { ADD_TODO, TOGGLE_TODO } from "../constants"
import todo from './todo'
import { combineReducers } from "redux"

const byId = (state: Todos = {}, action: Action): Todos => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        default:
            return state
    }
}

const allIds = (state: Ids = [], action: Action): Ids => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.id]
        default:
            return state
    }
}


export default combineReducers({
    byId,
    allIds
})