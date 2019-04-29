// @flow
import { connect } from 'react-redux'
import getVisibleTodos from '../selectors'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'

import type { State } from '../types'

const mapStateToProps = ({ todos }: State, { filter }) => ({
    todos: getVisibleTodos(todos, filter)
})

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onTodoClick: (id: Id) => dispatch(toggleTodo(id))
// })

export default connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList)