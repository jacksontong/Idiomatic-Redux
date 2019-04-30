import { v4 } from 'node-uuid'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


const fakeDatabase = {
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

export const fetchTodos = async (filter: string) => {
    await delay(500)

    if (Math.random() > 0.5) {
        throw new Error("Boom")
    }
    
    switch (filter) {
        case 'all':
            return fakeDatabase.todos
        case 'active':
            return fakeDatabase.todos.filter(t => !t.completed)
        case 'completed':
            return fakeDatabase.todos.filter(t => t.completed)
        default:
            throw new Error(`Unknow filter: ${filter}`)
    }
}