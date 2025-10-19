import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import PropTypes from 'prop-types';
import './TodoItem.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="contact-item">
      <div className="contact-info">
        <div className="contact-name">{contact.name}</div>
        <div className="contact-phone">{contact.phone}</div>
        {contact.email && <div className="contact-email">{contact.email}</div>}
      </div>
      <button onClick={handleDelete} className="delete-button">
        Удалить
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
