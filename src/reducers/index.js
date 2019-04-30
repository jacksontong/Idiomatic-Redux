// @flow

import { combineReducers } from "redux"
import byId from './byId'
import createList from "./createList"

const listByFilter = combineReducers({
    'all': createList('all'),
    'active': createList('active'),
    'completed': createList('completed')
})

export default combineReducers({
    byId,
    listByFilter
})