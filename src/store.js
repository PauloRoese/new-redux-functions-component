import { createStore } from 'redux';


function reducers(state = [], action = {}) {
    console.log('entrei')
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
            {
                id: Math.random(),
                text: action.payload.text
            }]
        case 'REMOVE_TODO':
            console.log('id', action.payload.id)
            return state.filter(todo => todo.id !== action.payload.id)

        default:
            return state;
    }
}

const store = createStore(reducers);

export default store;