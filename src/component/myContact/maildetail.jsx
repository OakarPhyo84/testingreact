import React from "react";
import {mailinfo} from "../similar/allnotes";

function createMails(mail) {
  return (
    <div className={mail.name}>
            <input type={mail.type} placeholder={mail.hold} required />
          </div>
  );
}

function Maildetail(){
    return(
        <form action="mailto:oakarphyo2001@gamil.com" className="contact-form">
            {mailinfo.map(createMails)}
          <div className="third-row">
            <textarea name="message" id="" rows="3" placeholder="Subject" required></textarea>
          </div>
          <button className="send_btn" type="submit">Send<i className="fas fa-paper-plane"></i></button>
        </form>
    )
}

export default Maildetail;