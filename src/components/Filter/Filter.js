import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/todosSlice';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Пошук справ..."
        className="filter-input"
      />
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
