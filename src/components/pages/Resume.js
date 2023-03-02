
    import React from "react";

    function Resume() {
      return (
        <div className= "container-base">
        <div>
        <p className="text-end fs-1 me-5">Resume</p>
          <hr />
    
         <div className = "row d-flex justify-content-around">
        
        <div className ="card col-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-1">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-3 list-unstyled">
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
          <p className ="text-center mt-4 fs-1">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-3 list-unstyled">
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
          <p className ="text-center mt-4 fs-1">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-3 list-unstyled">
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
        
        <a href={process.env.PUBLIC_URL + "/Kevin_BellResume_2023.pdf"}
          target="_blank" rel="noreferrer" className="hyperlink">
          
          <p className ="text-end fs-3 me-5">Download My Resume</p>
          </a>
        </div>

      );
    }
    
    export default Resume;
