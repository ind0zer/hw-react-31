import React from 'react';
import ContactForm from './components/TodoForm/TodoForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Книга контактомв</h1>
      </header>
      <main className="App-main">
        <ContactForm />
        <Filter />
        <ContactList />
      </main>
    </div>
  );
}

export default App;
