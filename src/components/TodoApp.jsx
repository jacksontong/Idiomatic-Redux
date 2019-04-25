// @flow
import React from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
    <Container>
        <h1>Todo App</h1>
        <AddTodo />
        <VisibleTodoList />
    </Container>
)

export default TodoApp