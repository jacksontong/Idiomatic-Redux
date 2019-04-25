// @flow
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SET_VISIBILITY_FILTER } from "../constants"

export type VisibilityFilter = typeof SHOW_ACTIVE | typeof SHOW_ALL | typeof SHOW_COMPLETED

export type VisibilityFilterState = {
    +visibilityFilter: VisibilityFilter
}

export type VisibilityFilterAction = {
    type: typeof SET_VISIBILITY_FILTER,
    +filter: VisibilityFilter
}