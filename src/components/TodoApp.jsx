// @flow
import React from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import type { Match } from 'react-router-dom'

export type Props = {
    match: Match
}

const TodoApp = ({ match }: Props) => (
    <Container>
        <h1>Todo App</h1>
        <AddTodo/>
        <VisibleTodoList filter={match.params.filter || 'all'}/>
        <Footer/>
    </Container>
)

export default TodoApp