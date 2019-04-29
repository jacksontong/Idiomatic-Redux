// @flow
import React from 'react'
import './todo.css'

import type { Text } from '../types/todos'
import type { Node } from 'react'

export type Props = {
    text: Text,
    completed: boolean,
    onClick: () => void
}

const Todo = ({
    text,
    completed,
    onClick
}: Props): Node => (
    <li className={completed ? 'completed' : ''} onClick={onClick}>
        {text}
    </li>
)

export default Todo