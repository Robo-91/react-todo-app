import './TodoItems.css';

const TodoItems = (props) => {


    return (
        props.items.map(item => 
            (
                <div key={item.id} className="todo-item">
                    <button 
                        className="update-btn"
                        onClick={() => props.updateTodo(item.id)}>Update</button>
                    <h3>{item.title}</h3>
                    <p>{`${item.date.getMonth()}-${item.date.getUTCDate()}-${item.date.getFullYear()}`}</p>
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteTodo(item.id)}>Delete</button>
                </div>
            )
        )
    );
};

export default TodoItems;