import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const addContact = createAction('contacts/addContact');
export const editContact = createAction('contacts/editContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      const newContact = {
        id: Date.now().toString(),
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };
      state.contacts.push(newContact);
    })
    .addCase(editContact, (state, action) => {
      const contact = state.contacts.find(contact => contact.id === action.payload.id);
      if (contact) {
        contact.name = action.payload.name;
        contact.phone = action.payload.phone;
        contact.email = action.payload.email;
      }
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default contactsReducer;
