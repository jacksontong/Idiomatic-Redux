// @flow

import type { Saga } from 'redux-saga'
import { all, fork, takeEvery, call, put, takeLatest } from "redux-saga/effects"
import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS, FETCH_TODOS_FAIL,
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS
} from "../constants"
import type { AddTodoRequestAction, FetchTodosRequestAction, ToggleTodoRequestAction } from "../types/todos"
import { addTodo, toggleTodo, fetchTodos } from "../api"
import { normalize } from "normalizr"
import * as fromSchema from '../schemas'

function* handleAddTodo(action: AddTodoRequestAction) {
    const response = yield call(addTodo, action.text)
    yield put({
        type: ADD_TODO_SUCCESS,
        response: normalize(response, fromSchema.todo)
    })
}

function* watchAddTodo() {
    yield takeEvery(ADD_TODO_REQUEST, handleAddTodo)
}


function* handleToggleTodo(action: ToggleTodoRequestAction) {
    const response = yield call(toggleTodo, action.id)
    yield put({
        type: TOGGLE_TODO_SUCCESS,
        response: normalize(response, fromSchema.todo)
    })
}

function* watchToggleTodo() {
    yield takeEvery(TOGGLE_TODO_REQUEST, handleToggleTodo)
}

function* handleFetchTodos({ filter }: FetchTodosRequestAction) {
    try {
        const response = yield call(fetchTodos, filter)
        yield put({
            type: FETCH_TODOS_SUCCESS,
            filter,
            response: normalize(response, fromSchema.todoList)
        })
    } catch (error) {
        yield put({
            type: FETCH_TODOS_FAIL,
            message: error.message || "something went wrong",
            filter
        })
    }
}

function* watchFetchTodos() {
    yield takeLatest(FETCH_TODOS_REQUEST, handleFetchTodos)
}

export default function* rootSaga(): Saga<void> {
    yield all([
        fork(watchAddTodo),
        fork(watchToggleTodo),
        fork(watchFetchTodos),
    ])
}