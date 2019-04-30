// @flow
import type { State } from "../types"
import type { Filter, Id, Ids, Todo, Todos } from "../types/todos"

const getIds = (state: Ids) => state

const getTodo = (state: Todos, id: Id) => state[id]

export const getVisibleTodos = ({ listByFilter, byId }: State, filter: Filter): Todo[] => {
    const ids = getIds(listByFilter[filter].ids)
    return ids.map(id => getTodo(byId, id))
}

export const getIsFetching = ({ listByFilter }: State, filter: Filter): boolean => {
    return listByFilter[filter].isFetching
}

export const getErrorMessage = ({ listByFilter }: State, filter: Filter) => listByFilter[filter].errorMessage