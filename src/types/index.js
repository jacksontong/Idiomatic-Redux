// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'
import type { TodosAction, TodosState } from './todos'
import type { VisibilityFilterAction, VisibilityFilterState } from './visibilityFilter'

export type ReduxInitAction = { type: "@@INIT" }

export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction

export type State = TodosState & VisibilityFilterState

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>