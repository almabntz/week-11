import { useState, useEffect } from "react";
import Form from "./form";
//import Contact  from "./contact";

//contact is the child
//contacts is the parent 
const Contacts = (props) => {
  const [contacts, setContacts] = useState([]);
  
 //fetch from DB
const getContacts= async () => {
  const response = await fetch('http://localhost:6060/contacts');
  const myContacts = await response.json ();
  setContacts(myContacts)
  //console.log(myContacts)
};
useEffect(() => {
  getContacts();
}, [contacts]);


  // //ADD contact 
  const postContact = async (newContact) => {
    console.log(newContact)
    const response = await fetch ("http://localhost:6060/contacts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newContact),
   })
   const data = await response.json ();
    console.log("From the post", data); 
    //setContacts(data);
  };

//--------------------------new code is here----------------------




  return (
    <div className="contacts">

        {contacts.map((contacts, index) => {
      return (
        // all existing contacts populating here
        <li key={index}>
          <img className="image-size" src= {contacts.photo} />
            Name: {contacts.name}, Phone Number: {contacts.number}, {contacts.email}
            <button type="button">Delete</button>
        </li>
      )
   
})}
      <div className="Add-User-Form">
      <Form saveContact={postContact} />
      </div>
     
    </div>
  );
}

export default Contacts;

//<Contact contact={Contact} key={Contact.id}/>
// <Contact/>