import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({addContact, contactList}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate){
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contactList.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contactList, duplicate]);

  return (
    <>
      <section>
        <h2>Add Contact
        {duplicate ? " --- Name Already Exists ---" : ""}
      </h2>
        <ContactForm handleSubmit={handleSubmit}
        name={name} setName={setName}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileList={contactList} />
      </section>
    </>
  );
};
