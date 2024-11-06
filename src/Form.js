// Form.js
import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!value.trim()) {
            alert('入力してください');
            return;
        }

        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type='submit'>追加</button>
        </form>
    );
};

export default Form;
