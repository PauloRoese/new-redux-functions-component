import React from 'react';

import { Provider } from 'react-redux'

import store from './store';

import ListaTodos from './ListaTodos';
import ContadorTodos from './contadorTodos';



function App() {
  return (
    <Provider store={store}>
      <div>
        <ListaTodos />
       <ContadorTodos/>
      </div>
    </Provider>
  );
}

export default App;
