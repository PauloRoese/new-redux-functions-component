import React, { useState } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as actions from './action';
// import { addTodo, removeTodo } from './action';


const ListaTodos = (props) => {
    const [text, setText] = useState('')

    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    <>
                        <li key={todo.id}> {todo.text} </li>
                        <button
                            onClick={(ev) => {
                                ev.preventDefault();
                                ev.stopPropagation();
                                props.removeTodo(todo.id)
                                setText('')
                                console.log(props);
                            }}
                        >excluir</button>
                    </>
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
                    // actions.addTodo(text)
                    setText('')
                    console.log(props);
                }}
            >include</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('stateTodosLista', state)
    return { todos: state }
};

// const mapDispatchToProps = { addTodo, removeTodo }
const mapDispatchToProps = dispatch => (
    bindActionCreators(actions, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(ListaTodos);