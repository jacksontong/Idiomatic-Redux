// @flow
import type { State } from "../types"
import type { Id, Ids, Todo, Todos } from "../types/todos"

export const getVisibleTodos = ({ listByFilter, byId }: State, filter: string): Todo[] => {
    const ids = getIds(listByFilter[filter])
    return ids.map(id => getTodo(byId, id))
}

const getIds = (state: Ids) => state

const getTodo = (state: Todos, id: Id) => state[id]