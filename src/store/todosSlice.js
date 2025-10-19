import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: Date.now().toString(),
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };
      state.contacts.push(newContact);
    },
    editContact: (state, action) => {
      const contact = state.contacts.find(contact => contact.id === action.payload.id);
      if (contact) {
        contact.name = action.payload.name;
        contact.phone = action.payload.phone;
        contact.email = action.payload.email;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, editContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
