// @flow
import React, { Component } from "react"
import { connect } from 'react-redux'
import { getIsFetching, getVisibleTodos } from '../selectors'
import { toggleTodo, fetchTodos } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'
import type { Filter, Todo } from "../types/todos"

export type Props = {
    todos: Todo[],
    onTodoClick: () => void,
    fetchTodos: typeof fetchTodos,
    isFetching: boolean,
    filter: Filter,
}

class VisibleTodoList extends Component<Props> {

    componentDidMount() {
        const { filter, fetchTodos } = this.props
        fetchTodos(filter)
    }

    componentDidUpdate({ filter: prevFilter }: Props) {
        const { filter, fetchTodos } = this.props
        if (filter !== prevFilter) {
            fetchTodos(filter)
        }
    }

    render() {
        const { isFetching, todos, onTodoClick } = this.props

        if (isFetching && !todos.length) {
            return <p>loading...</p>
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