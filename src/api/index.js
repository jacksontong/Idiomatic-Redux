// @flow
import { v4 } from 'node-uuid'
import type { Filter, Id } from "../types/todos"
import type { Todos, Todo } from "../types/api"

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const fakeDatabase: {
    todos: Todos
} = {
    todos: [{
        id: v4(),
        text: "hey",
        completed: false
    },{
        id: v4(),
        text: "hi",
        completed: true
    },{
        id: v4(),
        text: "ha",
        completed: false
    },{
        id: v4(),
        text: "ho",
        completed: false
    }]
}

export const fetchTodos = async (filter: Filter) => {
    await delay(500)

    // if (Math.random() > 0.5) {
    //     throw new Error("Boom")
    // }

    switch (filter) {
        case 'all':
            return Promise.resolve(fakeDatabase.todos)
        case 'active':
            return Promise.resolve<Todo[]>(fakeDatabase.todos.filter(t => !t.completed))
        case 'completed':
            return Promise.resolve<Todo[]>(fakeDatabase.todos.filter(t => t.completed))
        default:
            throw new Error(`Unknow filter: ${filter}`)
    }
}

export const addTodo = async (text: string) => {
    await delay(500)
    const todo = {
        id: v4(),
        completed: false,
        text
    }
    fakeDatabase.todos.push(todo)

    return Promise.resolve(todo)
}

export const toggleTodo = async (id: Id) => {
    await delay(500)
    const todo = fakeDatabase.todos.find(t => t.id ===id)
    if (todo) {
        todo.completed = !todo.completed
        return todo
    }
}