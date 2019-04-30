// @flow
import {
    ADD_TODO_SUCCESS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST,
    TOGGLE_TODO_SUCCESS,
    FETCH_TODOS_FAIL
} from "../constants"
import type { Filter, Id, Text } from '../types/todos'
import * as fromApi from "../api"
import type { Dispatch } from "../types"
import { normalize } from "normalizr"
import * as fromSchema from '../schemas'

export const addTodo = (text: Text) => async (dispatch: Dispatch) => {
    const response = await fromApi.addTodo(text)
    dispatch({
        type: ADD_TODO_SUCCESS,
        response: normalize(response, fromSchema.todo)
    })
}

export const toggleTodo = (id: Id) => async (dispatch: Dispatch) => {
    const response = await fromApi.toggleTodo(id)
    dispatch({
        type: TOGGLE_TODO_SUCCESS,
        response: normalize(response, fromSchema.todo)
    })
}

export const fetchTodos = (filter: Filter) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST, filter })
    try {
        const response = await fromApi.fetchTodos(filter)
        dispatch({
            type: FETCH_TODOS_SUCCESS,
            filter,
            response: normalize(response, fromSchema.todoList)
        })
    } catch (error) {
        dispatch({
            type: FETCH_TODOS_FAIL,
            message: error.message || "something went wrong",
            filter
        })
    }
}