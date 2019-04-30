// @flow

import { combineReducers } from "redux"
import byId, * as fromById from './byId'
import createList, * as fromList from "./createList"
import type { State } from "../types"
import type { Filter, Todo } from "../types/todos"

const listByFilter = combineReducers({
    'all': createList('all'),
    'active': createList('active'),
    'completed': createList('completed')
})

export default combineReducers({
    byId,
    listByFilter
})

export const getErrorMessage = ({ listByFilter }: State, filter: Filter) =>
    fromList.getErrorMessage(listByFilter[filter])

export const getIsFetching = ({ listByFilter }: State, filter: Filter) =>
    fromList.getIsFetching(listByFilter[filter])

export const getVisibleTodos = (state: State, filter: Filter) => {
    const ids = fromList.getIds(state.listByFilter[filter])
    return ids.map<Todo>(id => fromById.getTodo(state.byId, id))
}