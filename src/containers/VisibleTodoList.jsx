// @flow
import React, { Component } from "react"
import { connect } from 'react-redux'
import { getVisibleTodos } from '../selectors'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'
import type { Props as TodoListProps } from '../components/TodoList'
import { fetchTodos } from "../api"

export type Props = {
    filter: string,
    ...TodoListProps
}

class VisibleTodoList extends Component<Props> {

    async componentDidMount() {
        const todos = await fetchTodos(this.props.filter)
        console.log(todos)
    }

    async componentDidUpdate({ filter: prevFilter }: Props) {
        if (this.props.filter !== prevFilter) {
            const todos = await fetchTodos(this.props.filter)
            console.log(todos)
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

VisibleTodoList = withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(VisibleTodoList))

export default VisibleTodoList