import './TodoItems.css';

const TodoItems = (props) => {

    return (
        props.items.map(item => 
            (
                <ul key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.date.toLocaleString('en-US')}</p>
                    <button onClick={() => props.deleteTodo(item.id)}>Delete</button>
                </ul>
            )
        )
    );
};

export default TodoItems;