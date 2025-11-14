import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Книга контактів</h1>
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
