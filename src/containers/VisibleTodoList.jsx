// @flow
import { connect } from 'react-redux'
import getVisibleTodos from '../selectors'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'
import { withRouter } from "react-router-dom"

import type { State } from '../types'

const mapStateToProps = ({ todos }: State, { match }) => ({
    todos: getVisibleTodos(todos, match.params.filter || 'all')
})

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onTodoClick: (id: Id) => dispatch(toggleTodo(id))
// })

export default withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList))