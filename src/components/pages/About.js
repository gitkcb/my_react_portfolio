import React from 'react';

export default function About() {
  return (
    <div className = "container-base">
      <p className="text-end fs-1 me-5">About Me</p>
      <hr />
      <div className = "row justify-content-center">
        <div className = "col-sm-12 col-md-4">
          <img src="/images/me.jpg" alt="me on the shore" className= "rounded-pill"></img>
        </div>
      
      <div className ="col-md-6 col-sm-12">
      <p className ="text-wrap fs-4 ms-5 ps-5">
       Hello! My name is Kevin and I'm currently enrolled in UCONN's Web Development Certificate program. Throughout the program, we've covered the fundamentals of full-stack web development. I'm aware that this education is just the beginning and I'm excited to continue my pursuit of knowledge. I inspire to work in an environment where one can feel free to express themselves and their ideas openly, while creatively collaborating.    <br>
       </br>
       I have a passion for the environment and previously studied natural science. I enjoy spending my free-time outdoors, especially by the water.
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
