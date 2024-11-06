// Item.js
import React from 'react';

const Item = ({ content, id, deleteTodo, toggleTodo, isDone }) => {
    return (
        <li>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => toggleTodo(id)}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {content}
            </span>
            <button onClick={() => deleteTodo(id)}>削除</button>
        </li>
    );
};

export default Item;
