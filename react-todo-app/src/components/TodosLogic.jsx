import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
const [todos, setTodos] = useState([

    {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
    },
]);
const handleChange = (id) => {
    setTodos((prevState) => 
    prevState.map((todo) => {
        if (todo.id === id) {
            return {
            ...todo,
            completed: !todo.completed,
            };
        }
        return todo;
    })
    );
    // console.log('clicked', id);
};

const delTodo = (id) => {
    setTodos([
        ...todos.filter((todo) => {
            return todo.id !== id;
        }),
    ]);
    console.log('deleted', id);
};
const addTodoItem = (title) => {
const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false,
};
setTodos([...todos, newTodo]);
};

    return (
        <div>
           <InputTodo addTodoItem={addTodoItem} />
           <TodosList todosProps={todos} handleChange={handleChange}
            setTodos={setTodos} 
            delTodo={delTodo}
            />
        </div>
    );
};    

export default TodosLogic;