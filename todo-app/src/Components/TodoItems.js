const TodoItems = (props) => {
   return (
        props.items.map(item => 
            (<h3>{item.title}</h3>)
        )
   );
};

export default TodoItems;