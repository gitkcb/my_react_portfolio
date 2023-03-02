import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

     
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

    
      if (!validateEmail(email) || !name || !message) {
          setErrorMessage(
              'Please make sure all fields in the form are filled out and there are no blank spaces.'
          );
          return;
      }
      alert(`Hello ${name}, your message was successfully sent!`);

    
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
  };

 
  return(
  <div className="container-base">
     
    
          
      <p className="text-end fs-1 me-5">Contact Me</p>
      <hr/>
              
    
    <div className = "row">
      <form className="form col-6">
       
      <div className=" mb-3 ms-3 mt-3 me-3">
              <label htmlFor='name' className="form-label">Name:</label>
              <input
                  className="form-control"
                  value={name}
                  name='name'
                  onChange={handleInputChange}
                  type='text'
                  placeholder="Enter your name"></input>
          </div>
       <div className="  mb-3 ms-3 mt-3 me-3">
              <label htmlFor='email' className="form-label">Email:</label>
              <input
                  className="form-control"
                  value={email}
                  name='email'
                  onChange={handleInputChange}
                  type='email'
                  placeholder="Enter your email address"></input>
          </div>
        
          <div className=" mb-3 ms-3 mt-3 me-3 form-floating">
              <textarea
                  className="form-control"
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                  id="message"></textarea>
                  <label htmlFor='message'>Please leave your message here</label>
          </div>
          <a href= 'mailto:kcharlesbell@gmail.com?subject={name}&bcc={email}&body={message}'>
          <button
              type="button" 
              onClick={handleFormSubmit}
              className='btn btn-dark btn-md fs-4 mb-4 ms-5 mt-3'>Send
          </button>
          </a>
      </form>
     
      
      </div>
  </div>
  
  );
  
}
export default Contact;
