// App.js
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';

const App = () => {
    const [todos, setTodos] = useState([
        { content: '掃除をする', id: nanoid(), isDone: false },
        { content: '洗濯をする', id: nanoid(), isDone: false },
        { content: '料理をする', id: nanoid(), isDone: false },
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { content: text, id: nanoid(), isDone: false }
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </>
    );
};

export default App;
