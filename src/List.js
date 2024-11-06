// List.js
import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <Item
                    key={todo.id}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    content={todo.content}
                    isDone={todo.isDone}
                />
            ))}
        </ul>
    );
};

export default List;
