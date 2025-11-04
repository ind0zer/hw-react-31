import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Список справ</h1>
      </header>
      <main className="App-main">
        <TodoForm />
        <Filter />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
