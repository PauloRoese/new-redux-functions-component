import React, { useState } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as actions from './action';


const ListaTodos = (props) => {
    const [text, setText] = useState('')
    // const [todos, setTodos] 

    return (
        <div>
            <ul>
                {props.todos.map(todo =>(
                    <li key={todo.id}> {todo.text} </li>
                ))}
            </ul>

            <input
                type="text"
                value={text}
                onChange={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    setText(ev.target.value)
                }}
            />
            <button
                onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    props.addTodo(text)
                    setText('')
                    console.log(props);
                }}
            >include</button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ListaTodos);