
    import React from "react";

    function Resume() {
      return (
        <div className= "container-base bg-light">
        <div>
        <p className="text-end fs-1 me-5">Resume</p>
          <hr />
    
         <div className = "row d-flex justify-content-around">
        
        <div className ="card col-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            
          </ul>
          </div>
        </div>
        </div>
        <div className ="card col-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            
          </ul>
          </div>
        </div>
        </div>
        <div className ="card col-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            
          </ul>
          </div>
        </div>
        </div>
   
        </div>
        </div>

        <div className = "row">
          <div className = " col-4 position-absolute end-0 bottom-0">
        <a href={process.env.PUBLIC_URL + "/Kevin_BellResume_2023.pdf"}
          target="_blank" rel="noreferrer" className="hyperlink">
          
          <p className ="text-end fs-4 me-5">Download My Resume</p>
          </a>
        </div>
        </div>
        <div className ="row p-5 m-5">
        </div>
           <div className ="row p-3 m-5">

        </div>
       
        
        </div>

      );
    }
    
    export default Resume;
