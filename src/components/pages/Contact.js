
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [state, handleSubmit] = useForm("contactForm");
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const [ errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;


  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
     <div className="container-base">
      <p className="text-end fs-1 me-5">Contact Me</p>
     <hr/>
     <div className = "row">
        <form id="contact-form"  onSubmit={handleSubmit}>
          <div className="field mb-3 ms-3 mt-3 me-3 fs-3">
            <label className="label" htmlFor="name">Name:</label><br>
            </br>
            <input className="input col-6" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="field mb-3 ms-3 mt-3 me-3 fs-3">
            <label className="label" htmlFor="email">Email Address:</label>
            <br></br>
            <input className="input col-6" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="field mb-3 ms-3 mt-3 me-3 fs-3">
            <label className="label" htmlFor="message">Message:</label><br></br>
            <textarea className="textarea col-6" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="mb-3 ms-3 mt-3 me-3 fs-4">{errorMessage}</p>
            </div>
          )}
          <button className="btn btn-dark btn-md fs-4 mb-4 ms-5 mt-3"  type="submit">Submit</button>
        </form>
        </div>
      </div>
    );

}
export default Contact;
