// reducer.js

// Import action type constants
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actionTypes";

// Define initial state with contacts fetched from local storage
const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

// Redux reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      // Check if required fields are empty
      let flag = 0;
      if (action.payload.first_name == "" || action.payload.last_name == "") {
        alert("ohh You Missed Required Input , Please fill");
        flag = 1;
      } else {
        // Check for duplicate name in contacts
        state.contacts.forEach((el) => {
          if (
            el.first_name == action.payload.first_name &&
            el.last_name == action.payload.last_name
          ) {
            alert("Name Already Exist In Contact");
            flag = 1;
          }
        });
      }

      if (!flag) {
        alert("Contact Saved Successfully!!!");

        let updatedContacts =
          JSON.parse(localStorage.getItem("contacts")) || [];
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
    }

    case REMOVE_CONTACT: {
      // Remove contact by ID
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id != action.payload.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,

        contacts: [...updatedContacts],
      };
    }

    case EDIT_CONTACT: {
      // Check for empty input fields
      if (action.payload.first_name == "" || action.payload.last_name == "") {
        alert("Input Fields Can Not Be Leave Empty");
        // flag=1
        return state;
      } else {
        let flag = 0;
        let Contacts = JSON.parse(localStorage.getItem("contacts"));
        // Check for duplicate name while editing
        Contacts.forEach((el) => {
          if (
            el.id != action.payload.id &&
            el.first_name == action.payload.first_name &&
            el.last_name == action.payload.last_name
          ) {
            alert("Name Already Exist!!");
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          // Update contact
          let updatedContacts = Contacts.map((el) => {
            if (el.id == action.payload.id) {
              return (el = { ...action.payload });
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          alert("Contact has been Updated");
          return {
            ...state,
            contacts: state.contacts.map((el) => {
              if (el.id == action.payload.id) {
                return (el = { ...action.payload });
              } else {
                return el;
              }
            }),
          };
        }
      }
    }
    default:
      return state;
  }
}
