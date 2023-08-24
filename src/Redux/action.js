// action.js

// Import action type constants
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

// Action creator to add a new contact
export const addContact = (payload) => {
  console.log(payload)  // Log the payload for debugging
  return {
    type: ADD_CONTACT,  // Dispatches an action of type ADD_CONTACT
    payload,  // The contact data to be added
  };
};

// Action creator to remove a contact by ID
export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT, // Dispatches an action of type REMOVE_CONTACT
    payload: {
      id, // The ID of the contact to be removed
    },
  };
};

// Action creator to edit an existing contact
export const editContact = (payload) => {
  console.log(payload)  // Log the payload for debugging
  return {
    type: EDIT_CONTACT, // Dispatches an action of type EDIT_CONTACT
    payload,  // The updated contact data
  };
};