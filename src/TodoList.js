import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodos = ({ todoText, id }) => {
        setTodos([...todos, { todoText, id }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodos={addTodos} />

            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.todoText} handleDelete={() => deleteTodo(todo.id)} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
