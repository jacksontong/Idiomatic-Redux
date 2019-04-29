// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'
import type { TodosAction, TodosState } from './todos'

export type ReduxInitAction = { type: "@@INIT" }

export type Action = ReduxInitAction | TodosAction

export type State = TodosState

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>