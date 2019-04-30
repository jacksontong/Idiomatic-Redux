// @flow
import { createSelector } from "reselect"
import type { Todo, TodosById } from "../types/todos"

const getAllIds = (state: TodosById) => state

const getVisibilityFilter = (_, filter) => filter

export const getVisibleTodos = createSelector(
    [getAllIds, getVisibilityFilter],
    ({ idsByFilter, byId }: TodosById, filter: string) => {
        return idsByFilter[filter].map(id => byId[id])
    }
)