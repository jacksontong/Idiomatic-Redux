// @flow
import React from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../containers/AddTodo'

const TodoApp = () => (
    <Container>
        <h1>Todo App</h1>
        <AddTodo />
    </Container>
)

export default TodoApp