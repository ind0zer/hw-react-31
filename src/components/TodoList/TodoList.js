import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>Справ поки немає. Додайте першу справу!</p>
      </div>
    );
  }

  if (filteredTodos.length === 0 && filter) {
    return (
      <div className="empty-state">
        <p>Справи не знайдені за вашим запитом.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
