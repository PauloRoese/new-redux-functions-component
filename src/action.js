export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            text: text
        }
    }
}
export function removeTodo(id) {
    console.log
    return {
        type: 'REMOVE_TODO',
        payload: {
            id: id
        }
    }
}

