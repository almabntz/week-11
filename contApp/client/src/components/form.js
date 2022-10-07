import React from "react";
import { useState } from "react";

const Form = (props) => {
  const [contact, setContact] = useState ([]);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

//new code, this is my set data--------------------------
const set = (name) => {
  return ({target: {value}}) => {
    setNewContact((originalValues) => ({
      ...originalValues,
      [name]: value,
    }));
  };
};
//-------------------------------------NEW CODE FOR SET DATA

//THIS WILL BE FOR MY EDIT FEATURE!!
  //create functions that handle the event of the user typing into the form
  // const handleNameChange = (event) => {
  //   const newContactName = event.target.value;
  //   setContact((contact) => ({ ...contact, newContactName }));
  // };

  // const handleEmailChange = (event) => {
  //   const newcontactEmail = event.target.value;
  //   setContact((contact) => ({ ...contact, newcontactEmail }));
  // };

  // const handlePhoneChange = (event) => {
  //   const newcontactPhone = event.target.value;
  //   setContact((contact) => ({ ...contact, newcontactPhone }));
  // };



  //----------------new code--------------------
  //HANDLE SUBMIT FOR INCOMING DATA
  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveContact(newContact)
    //console.log(contact);
    setContact({
      name: "",
      email: "",
      phoneNumber: ""
    })
  };
//------------------------new code------------------

  return (
    <form className="Add-Contact" onSubmit={handleSubmit}>
      <fieldset>
        <label>Name:</label>
        <input
          type="text"
          id="add-contact-name"
          placeholder="Contact Name"
          required
          value={newContact.name} //name change
          onChange={set ("name")}
        />
        <label>Email:</label>
        <input
          type="email"
          id="add-contact-email"
          placeholder="Contact Email"
          required
          value={newContact.email}
          onChange={set ("email")}
        />
        <label>Phone:</label>
        <input
          type="text"
          id="add-contact-phone"
          placeholder="Contact Phone"
          value={newContact.phoneNumber}
          onChange={set ("phoneNumber")}
        />
        <button className="submit" type="submit">Add Contact</button>
      </fieldset>  
      <input type= "submit" value="Add" /> 
    </form>
  );
};

export default Form;