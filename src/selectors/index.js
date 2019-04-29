// @flow
import * as fromTodos from './todos'
import type { State } from "../types"

export const getVisibleTodos = ({ todos }: State, filter: string) => fromTodos.getVisibleTodos(todos, filter)