import './TodoItems.css';

const TodoItems = (props) => {


    return (
        props.items.map(item => 
            (
                <ul key={item.id}>
                    <button onClick={() => props.updateTodo(item.id)}>Update Title</button>
                    <h3>{item.title}</h3>
                    <p>{`${item.date.getMonth()}-${item.date.getUTCDate()}-${item.date.getFullYear()}`}</p>
                    <button onClick={() => props.deleteTodo(item.id)}>Delete</button>
                </ul>
            )
        )
    );
};

export default TodoItems;