// @flow
import React, { Component } from "react"
import { connect } from 'react-redux'
import { getVisibleTodos } from '../selectors'
import { toggleTodo, fetchTodos } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'
import type { Props as TodoListProps } from '../components/TodoList'

export type Props = {
    ...TodoListProps,
    fetchTodos: typeof fetchTodos,
    filter: string,
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
        return (
            <TodoList {...this.props}/>
        )
    }
}

const mapStateToProps = (state: State, { match }) => {
    const filter = match.params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
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