const TodoItems = (props) => {
   return (
        props.items.map(item => 
            (
                <ul key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.date.toLocaleString('en-US')}</p>
                </ul>
            )
        )
   );
};

export default TodoItems;