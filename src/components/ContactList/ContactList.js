import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = () => {
  const { contacts, filter } = useSelector((state) => state.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.phone.includes(filter)
  );

  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <p>Контактів поки немає. Додайте перший контакт!</p>
      </div>
    );
  }

  if (filteredContacts.length === 0 && filter) {
    return (
      <div className="empty-state">
        <p>Контакти не знайдені за вашим запитом.</p>
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