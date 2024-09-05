import React, { useRef } from "react";
import "../style/Services.css";
import emailjs from "@emailjs/browser";

export default function Services() {
  const form = useRef();
  const sendB = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7pana0f", "template_zmiux85", form.current, {
        publicKey: "1TQ1BZ2nLvbuBdmcH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="p_form">
      <form ref={form} onSubmit={sendB}>
        <label>Nom Complet:</label>
        <br />
        <input
          type="text"
          name="from_name"
          className="inputtext"
          placeholder="Your Name..."
        /><br/>
        <label>CIN:</label>
        <br />
        <input
          type="text"
          name="message"
          className="inputtext"
          placeholder="Your Name..."
        /><br/>
        <label>Groupe:</label>
        <br />
        <input
          type="text"
          name="message"
          className="inputtext"
          placeholder="Your Name..."
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="form_email"
          className="inputemail"
          placeholder="Your Email like isim@ofppt-edu.ma..."
        />
        <br></br>
        <br></br>
        <label>Service:</label>
        <br></br>
        <select name="message">
          <option value="Attestaion de poursuite de formation">Attestaion de poursuite de formation</option>
          <option value="Relve de notes">Relve de notes</option>
        </select>
        <br />
        <input type="submit" value="Send" className="inputsubmit" />
      </form>
    </div>
  );
}
