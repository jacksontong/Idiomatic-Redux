// @flow
import React from 'react'
import Todo from './Todo'

import type { Todo as TypeTodo, Id } from '../types/todos'
import type { Node } from 'react'

export type Props = {
    todos: TypeTodo[],
    onTodoClick: (Id) => void
}

const TodoList = ({
    todos,
    onTodoClick
}: Props): Node => (
    <ul>
        {todos.map(t => <Todo key={t.id} {...t} onClick={() => onTodoClick(t.id)} />)}
    </ul>
)

export default TodoList