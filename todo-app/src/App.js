import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoItems from './Components/TodoItems';

const initialTodos = [
  { id: 1, title: 'Record Ubiquity' , date: new Date(2021, 7, 6) },
  { id: 2, title: 'Buy AxeFx III' , date: new Date(2021, 7, 6) },
  { id: 3, title: 'Practice Guitar' , date: new Date(2021, 7, 6) }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodoHandler = (todo) => {
    setTodos(previousTodos => {
      return [todo, ...previousTodos];
    });
  };

  // const updateTodoTitle = () => {

  // };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm 
        onAddTodo={addTodoHandler} 
      />
      <TodoItems 
        items={todos}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
}

export default App;
