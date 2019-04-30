// @flow

import { RECEIVE_TODOS } from "../constants"
import type { Action } from "../types"
import type { Ids } from "../types/todos"

const createList = (filter: string) =>
    (state: Ids = [], action: Action): Ids => {
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

export default createList