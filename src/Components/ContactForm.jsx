import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {
 // Get the dispatch function from the Redux store
    const dispatch = useDispatch()

// Set initial state for the form fields
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        status: "active"
    })

// Update the form state when input values change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
// Dispatch action to add a new contact
    function handleSave() {
        dispatch(addContact(form))
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
            {/* First Name input field */}     
            <div className="mb-4 flex items-center">
                <label className="block font-bold w-1/4 mr-4" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="flex-grow border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Last Name input field */}
            <div className="mb-4 flex items-center">
                <label className="block font-bold w-1/4 mr-4" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="flex-grow border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
              {/* Status radio buttons */}
            <div className="mb-4 flex items-center">
                <label className="block font-bold w-1/4 mr-4">Status</label>
                <div className="flex">
                    <label className="mr-8 flex items-center">
                        <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={form.status === "active"}
                            onChange={handleChange}
                        />
                        <span className="ml-2">Active</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={form.status === "inactive"}
                            onChange={handleChange}
                        />
                        <span className="ml-2">Inactive</span>
                    </label>
                </div>
            </div>
         {/* Save Contact button */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm