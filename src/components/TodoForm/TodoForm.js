import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todosSlice';
import PropTypes from 'prop-types';
import './TodoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({
        text: text.trim(),
      }));
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Додати нову справу..."
          className="todo-input"
          required
        />
      </div>
      <button type="submit" className="todo-button">
        Додати
      </button>
    </form>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
