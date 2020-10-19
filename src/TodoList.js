import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodos = ({ todoText, id }) => {
        setTodos([...todos, { todoText, id }]);
    };

    const deleteTodo = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    return (
        <div>
            <NewTodoForm addTodos={addTodos} />

            <ul>
                {todos.map((todo) => (
                    <Todo key={uuid4()} text={todo.todoText} handleDelete={() => deleteTodo(todo)} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
