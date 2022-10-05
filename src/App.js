import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const defaultTodos = [
 { text: 'Cortar cebolla', completed: true },
 { text: 'Tomar el cursso de intro a React', completed: false },
 { text: 'Llorar con la llorona', completed: true },
 { text: 'LALALALAA', completed: false },
];

function App() {
 const [todos, setTodos] = React.useState(defaultTodos);
 const [searchValue, setSearchValue] = React.useState('');

 const completedTodos = todos.filter(todo => !!todo.completed).length;
 const totalTodos = todos.length;

 let searchedTodos = [];

 if (!searchValue.length >= 1) {
   searchedTodos = todos;
 } else {
   searchedTodos = todos.filter(todo => {
     const todoText = todo.text.toLowerCase();
     const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText);
   });
 }

 const completeTodo = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text);
   const newTodos = [...todos];
   newTodos[todoIndex].completed = true;
   setTodos(newTodos);
 };

 const deleteTodo = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text);
   const newTodos = [...todos];
   newTodos.splice(todoIndex, 1);
   setTodos(newTodos);
 };
 
 return (

       {searchedTodos.map(todo => (
          completeTodo(todo.text))),
          onDelete={``() => deleteTodo(todo.text)}
         
       )

}

export default App;
TodoItem.js
//Para que nuestra aplicación funcione también tenemos que recibir las props en nuestros ítems y usarlas.

import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };