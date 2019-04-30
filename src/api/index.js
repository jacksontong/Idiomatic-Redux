// @flow
import { v4 } from 'node-uuid'
import type { Filter, Todo } from "../types/todos"

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


const fakeDatabase: {
    todos: Todo[]
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