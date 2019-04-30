import type { Id, Text } from "./todos"

export type Todo = {
    id: Id,
    text: Text,
    completed: boolean
}

export type Todos = Array<Todo>