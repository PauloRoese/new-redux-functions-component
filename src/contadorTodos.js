import React from 'react';

import { connect } from 'react-redux'
// import { Container } from './styles';

function contadorTodos(props) {
    return (
        <h2 > Contamos ao todo {props.todos.length}</h2>

    );
}

const mapStateToProps = state => ({
    todos: state.todos,
})
export default connect(mapStateToProps)(contadorTodos);