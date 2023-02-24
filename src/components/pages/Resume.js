
    import React from "react";

    function Resume() {
      return (
        <div className= "container-base mb-4">
        <div>
          <p className = "text-center mt-4 fs-2">Resume</p>
          <hr />
    
          <a
          
          href={process.env.PUBLIC_URL + "Kevin_BellResume_2023.pdf"}
          target="_blank" rel="noreferrer"
          >
          
          <p className ="text-center mt-4 fs-2">Download My Resume</p>
          </a>
        </div>

        <div className = "card-body">
          <p className ="text-center mt-4 fs-2">Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-2 list-unstyled">
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            
          </ul>
          </div>
        </div>
        </div>
      );
    }
    
    export default Resume;
