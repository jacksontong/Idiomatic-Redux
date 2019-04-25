// @flow
import { SET_VISIBILITY_FILTER } from "../constants"
import type { VisibilityFilter } from '../types/visibilityFilter'
import type { Action } from '../types'

export const setVisibilityFilter = (filter: VisibilityFilter): Action => ({
    type: SET_VISIBILITY_FILTER,
    filter
})