import React from 'react';

export default function About() {
  return (
    <div className = "container-base">
      <p className="text-end fs-1 me-5">About Me</p>
      <hr />
      <div className = "row justify-content-center">
        <div className = "col-4">
          <img src="/images/me.jpg" alt="me on the shore" className= "rounded-pill"></img>
        </div>
      
      <div className ="col-6">
      <p className ="text-wrap fs-4 ms-5 ps-5">
       Hello! My name is Kevin Bell and I'm currently enrolled in UCONN's Full-Stack Web Development Certificate program. Throughout the course I've learned how to develop the front-end of an application, while connecting it to the back-end. <br>
       </br>
       My previous education is in Environmental Science. 
      </p>
      </div>
      </div>
      <div className="row p-5">

      </div>
      <div className="row p-5 filler">
        
        </div>
    </div>
  );
}
