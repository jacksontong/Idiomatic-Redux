// @flow
import React, { Component } from "react"
import { connect } from 'react-redux'
import { getVisibleTodos } from '../selectors'
import { toggleTodo, receiveTodos } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'
import type { Props as TodoListProps } from '../components/TodoList'
import { fetchTodos } from "../api"

export type Props = {
    ...TodoListProps,
    onReceiveTodos: typeof receiveTodos,
    filter: string,
}

class VisibleTodoList extends Component<Props> {

    async componentDidMount() {
        await this.fetchData()
    }

    async componentDidUpdate({ filter: prevFilter }: Props) {
        const { filter } = this.props
        if (filter !== prevFilter) {
            await this.fetchData()
        }
    }

    async fetchData() {
        const { filter, onReceiveTodos } = this.props
        const todos = await fetchTodos(filter)
        onReceiveTodos(filter, todos)
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
    onReceiveTodos: receiveTodos
})(VisibleTodoList))

export default VisibleTodoList