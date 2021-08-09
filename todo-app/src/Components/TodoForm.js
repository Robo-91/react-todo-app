import './TodoForm.css';

const TodoForm = () => {
    return (
        <div>
            <input type="text" />
            <input type="date" min="2018-01-01" max="2025-01-01" />
            <button type="submit">Submit</button>
        </div>
    );
};

export default TodoForm;