// @flow
import React, { Component } from "react"
import { connect } from 'react-redux'
import { getErrorMessage, getIsFetching, getVisibleTodos } from '../selectors'
import { toggleTodo, fetchTodos } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'
import type { Filter } from "../types/todos"
import type { Props as TodoListProps } from '../components/TodoList'
import FetchError from "../components/FetchError"

export type Props = TodoListProps & {
    fetchTodos: typeof fetchTodos,
    isFetching: boolean,
    filter: Filter,
    errorMessage: string
}

class VisibleTodoList extends Component<Props> {

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate({ filter: prevFilter }: Props) {
        const { filter } = this.props
        if (filter !== prevFilter) {
            this.fetchData()
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props
        fetchTodos(filter)
    }

    render() {
        const { isFetching, todos, onTodoClick, errorMessage } = this.props
        console.log(todos)

        if (isFetching && !todos.length) {
            return <p>loading...</p>
        }

        if (errorMessage && !todos.length) {
            return <FetchError message={errorMessage} onRetry={() => this.fetchData()}/>
        }

        return (
            <TodoList
                todos={todos}
                onTodoClick={onTodoClick}
            />
        )
    }
}

const mapStateToProps = (state: State, { match }) => {
    const filter: Filter = match.params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onTodoClick: (id: Id) => dispatch(toggleTodo(id))
// })

VisibleTodoList = withRouter(connect(mapStateToProps, {
    onTodoClick: toggleTodo,
    fetchTodos
})(VisibleTodoList))

export default VisibleTodoList