import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("contactForm");
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const [ errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
    
  
  if (state.succeeded) {
    return <p>Thanks for jreaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label id="name">Name</label>
      <textarea id="name" name="name" />
      <ValidationError prefix="name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label id="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default Contact;
