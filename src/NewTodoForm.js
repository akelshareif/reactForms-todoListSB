import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

const NewTodoForm = ({ addTodos }) => {
    const [todoText, setTodoText] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;

        setTodoText(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodos({ todoText, id: uuid4() });
        setTodoText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo:</label>
                <input id="todo" name="todo" value={todoText} onChange={handleChange} />

                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodoForm;
