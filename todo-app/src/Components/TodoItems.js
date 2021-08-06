import './TodoItems.css';

const TodoItems = (props) => {
   return (
        props.items.map(item => 
            (
                <ul key={item.id}>
                    <button>Update Title</button>
                    <h3>{item.title}</h3>
                    <p>{item.date.toLocaleString('en-US')}</p>
                    <button>Delete</button>
                </ul>
            )
        )
   );
};

export default TodoItems;