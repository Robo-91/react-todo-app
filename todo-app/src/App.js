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

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoHandler = (id) => {
    const updateTitle = prompt('Enter new Title:');
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        todo.title = updateTitle;
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <TodoForm 
        onAddTodo={addTodoHandler} 
      />
      <TodoItems 
        items={todos}
        deleteTodo={deleteTodoHandler}
        updateTodo={updateTodoHandler}
      />
    </div>
  );
}

export default App;
