import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState(''); 

    const addNewTitle = (event) => {
        setNewTitle(event.target.value);
    };

    const addNewDate = (event) => {
        console.log(event.target.value);
        setNewDate(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        const newTodoData = {
            id: Math.random(),
            title: newTitle,
            date: new Date(newDate)
        };

        props.onAddTodo(newTodoData);
        setNewTitle('');
        setNewDate('');
    };

    return (
        <div>
            <input 
                type="text" 
                value={newTitle}
                onChange={addNewTitle}
            />
            <input 
                type="date" 
                value={newDate} 
                onChange={addNewDate}
            />
            <button type="submit" onClick={submitForm}>Submit</button>
        </div>
    );
};

export default TodoForm;