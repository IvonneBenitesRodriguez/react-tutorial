import TodoItem  from './TodoItem';

const TodosList = ({todosProps, handleChange, delTodo, setTodos}) => {
    return (
        <ul>
            {todosProps.map((todo) => ( 
                <TodoItem 
                key={todo.id} 
                itemProp={todo} 
                setTodos={setTodos}
                handleChange={handleChange}
                delTodo={delTodo}
                />
            ))}
        </ul>
    );
};
export default TodosList;