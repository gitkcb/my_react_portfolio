import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // useState for Contact Form also set the useState to an empty string.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // useState for error messages.
  const [errorMessage, setErrorMessage] = useState('');

  // Gets the value and name of the input change.
  const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      // Sets the useState depending on the inputType.
      if (inputType === 'name') {
          setName(inputValue);
      } else if (inputType === 'email') {
          setEmail(inputValue);
      } else {
          setMessage(inputValue)
      }
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      // Validates email and checks to make sure there is a name and message.
      // If there is not one then sets the error message.
      if (!validateEmail(email) || !name || !message) {
          setErrorMessage(
              'Please make sure all fields in the form are filled out and there are no blank spaces.'
          );
          return;
      }
      alert(`Hello ${name}, your message was successfully sent!`);

      // If successful then clear the input fields.
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
  };

  // HTML for Contact Page:
  return(
  <div className="mb-5">
      {/* Header */}
      <div>
          
              <h2 className="text-center mt-4 fs-2" id="portfolioTitle">Contact Me</h2>
              <hr className='ms-5'/>
      </div>

      <form className="form">
        
      <div className="mb-3 ms-3 mt-3 me-3">
              <label htmlFor='name' className="form-label">Name:</label>
              <input
                  className="form-control"
                  value={name}
                  name='name'
                  onChange={handleInputChange}
                  type='text'
                  placeholder="Enter your name"></input>
          </div>
       <div className="mb-3 ms-3 mt-3 me-3">
              <label htmlFor='email' className="form-label">Email:</label>
              <input
                  className="form-control"
                  value={email}
                  name='email'
                  onChange={handleInputChange}
                  type='email'
                  placeholder="Enter your email address"></input>
          </div>
          {/* Message Section: */}
          <div className="mb-3 ms-3 mt-3 me-3 form-floating">
              <textarea
                  className="form-control"
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                  id="message"></textarea>
                  <label htmlFor='message'>Please leave your message here</label>
          </div>
          {/* Submit Button */}
          <a href= 'mailto:kcharlesbell@gmail.com?subject={name}&bcc={email}&body={message}'>
          <button
              type="button" 
              onClick={handleFormSubmit}
              className='btn btn-dark btn-md fs-4 mb-4 ms-5 mt-3'>Send
          </button>
          </a>
      </form>
      {/* Error Message: */}
      {errorMessage && (
          <div>
              <p className="error-text ms-5 fst-italic fw-semibold">{errorMessage}</p>
          </div>
      )}
  </div>
  );
  
}
export default Contact;
