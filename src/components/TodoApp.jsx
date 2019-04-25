// @flow
import React from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer';

const TodoApp = () => (
    <Container>
        <h1>Todo App</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </Container>
)

export default TodoApp