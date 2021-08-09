import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState(''); 

    const addNewTitle = (event) => {
        setNewTitle(event.target.value);
        console.log(newTitle);
    };

    const addNewDate = (event) => {
        setNewDate(event.target.value);
        console.log(newDate);
    };

    const submitForm = (event) => {
        event.preventDefault();

        const newTodoData = {
            title: newTitle,
            date: new Date(newDate)
        }

        setNewTitle('');
        setNewDate('');
        console.log(newTodoData);
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
                min="2018-01-01" 
                max="2025-01-01"
                onChange={addNewDate}
            />
            <button type="submit" onClick={submitForm}>Submit</button>
        </div>
    );
};

export default TodoForm;