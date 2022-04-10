import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__left">
        <h3>Get in</h3>
        <h1>Touch</h1>
        <div className="contacts">
          <p>
            {" "}
            <LocationOnIcon /> <p>21B,J3,Johar Town, Lahore</p>
          </p>
          <p>
            {" "}
            <EmailIcon /> <p>contact@Kryptomind.com</p>
          </p>
        </div>
      </div>
      <div className="contact__right">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea cols={"30"} rows={"5"} placeholder="Message"></textarea>
        <br />
        <button
          onClick={() => {
            console.log("message sent");
          }}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default Contact;
