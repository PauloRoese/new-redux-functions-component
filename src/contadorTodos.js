import React from 'react';

import { connect } from 'react-redux'
// import { Container } from './styles';

function contadorTodos(props) {
    return (
        <h2 > Contamos ao todo {props.todo.length}</h2>
    );
}

const mapStateToProps = state => {
    console.log('stateContador' ,state)
    return { todo: state }
}


export default connect(mapStateToProps)(contadorTodos);