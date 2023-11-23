import React from "react";
import {contactinfo} from "../similar/allnotes";

function createContacts(contact) {
  return (
    <li>
    <h5 class="phone_items"><i class={contact.name}></i>{contact.type}</h5>
    <span>{contact.info}</span>
  </li>
  );
}

function Phcontact(){
    return(
        <ul className="contact_list">
            {contactinfo.map(createContacts)}
        </ul>
    )
}

export default Phcontact;