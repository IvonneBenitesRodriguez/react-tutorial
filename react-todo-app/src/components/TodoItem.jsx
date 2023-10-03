
const TodoItem = ({ itemProp, handleChange, delTodo, setTodos }) => {
 console.log('itemProp:', itemProp);
 console.log('setTodos:', setTodos);

    if(!itemProp) {
        return null;
    }

    return (
        <li>
          <input type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
          />  
          <button onClick={() => delTodo(itemProp.id)}>Delete</button>
            {itemProp.title}
        </li>
    );
};
export default TodoItem;