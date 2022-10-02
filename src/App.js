import  React from 'react';
import {TodoCounter}  from  './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

function App() {
  const todos = [
    { text: 'Picar cebolla', completed:false},
    { text: 'Estudiar React', completed:false},
    { text: 'Llorar', completed:false},
  ]
  //cada componente de react sólo soporta que se le
  //envíe 1 componente
  return (
  //react sólo necesita que le enviemos 1 etiqueta por componente
  //es como un div invisible al html, cuenta como la etiqueta por componente
    <React.Fragment>

    <TodoCounter />
        
    <TodoSearch />
        <input placeholder="Escriba aquí"/>
    <TodoList>
      {todos.map(todo => (
        // Siempre que quiero iterar una Array
        // con React debo asignar una key al componente que los va a mostrar
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    </TodoList>
    <CreateTodoButton />
    </React.Fragment>
    
  )


}

export default App;