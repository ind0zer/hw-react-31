import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactsSlice';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      dispatch(addContact({
        name: name.trim(),
        phone: phone.trim(),
      }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ім'я контакту..."
          className="contact-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Номер телефону..."
          className="contact-input"
          required
        />
      </div>
      <button type="submit" className="contact-button">
        Додати контакт
      </button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;