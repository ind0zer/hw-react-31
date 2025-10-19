import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import './TodoList.css';

const ContactList = () => {
  const { contacts, filter } = useSelector((state) => state.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.phone.includes(filter) ||
    (contact.email && contact.email.toLowerCase().includes(filter.toLowerCase()))
  );

  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <p>Контактов пока нет. Добавьте первый контакт!</p>
      </div>
    );
  }

  if (filteredContacts.length === 0 && filter) {
    return (
      <div className="empty-state">
        <p>Контакты не найдены по вашему запросу.</p>
      </div>
    );
  }

  return (
    <ul className="contact-list">
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {};

export default ContactList;
