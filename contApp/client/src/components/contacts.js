import { useState, useEffect } from "react";
import Form from "./form";
//import Contact  from "./contact";

//contact is the child
//contacts is the parent 
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  
  // useEffect(() => {
  //   fetch("http://localhost:6060/contacts")
  //     .then((response) => response.json())
  //     .then((contacts) => {
  //           setContacts(contacts);
  //         });
  // }, []);

  // //ADD contact 
  const addContact = (newContact) => {
   // e.preventDefault
    setContacts((contacts) => [...contacts, newContact]);
  };

//fetch from DB
const getContacts= async () => {
  const response = await fetch('http://localhost:6060/contacts');
  const myContacts = await response.json ();
  setContacts(myContacts)
};
useEffect(() => {
  getContacts();
}, []);





  return (
    <div className="contacts">
        {contacts.map((contacts, index) => {
      return (
        <li key={index}>
          <img className="image-size" src= {contacts.image} />
            Name: {contacts.name}, Phone Number: {contacts.number}
            <button type="button">Delete</button>
        </li>
      )
   
})}
      <div className="Add-User-Form">
      <Form addContact={addContact} />
      </div>
      
    </div>
  );
}

export default Contacts;
//<Contact contact={contact} key={contact.id}/>

//gotta pass back this logic at some point