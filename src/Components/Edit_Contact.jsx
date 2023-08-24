import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';


function EditContact() {
// Get the contact ID from the route parameters
    const { id } = useParams()
    console.log(id)

// Get the dispatch function from Redux
    const dispatch = useDispatch()

 // Get the list of all contacts from the Redux store
    const AllContact = useSelector((store) => store.contacts)

  // Set up state for the form fields
    const [form, setForm] = useState({})

  // Handle changes to input fields and radio buttons
    const handleChange = (e) => {
     
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

 // Handle saving the edited contact
    function handleSave() {
        dispatch(editContact({ id, ...form }))

    }

     // Load the existing contact's data into the form when the component mounts
    useEffect(() => {
         // Find the contact with the matching ID and set its data in the form
        AllContact.filter((el) => el.id == id && setForm(el))

    }, [])

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
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


export default EditContact