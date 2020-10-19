import React from 'react';

const Todo = ({ text, handleDelete }) => {
    return (
        <>
            <li>{text}</li>
            <button onClick={handleDelete}>X</button>
        </>
    );
};

export default Todo;
