// @flow
import { connect } from 'react-redux'
import getVisibleTodos from '../selectors'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'

import type { State, Dispatch } from '../types'
import type { Id } from '../types/todos'

const mapStateToProps = (state: State) => ({
    todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onTodoClick: (id: Id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)