import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import PropTypes from 'prop-types';
import './ContactItem.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="contact-item">
      <div className="contact-content">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-phone">{contact.phone}</span>
      </div>
      <button onClick={handleDelete} className="delete-button">
        Видалити
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;