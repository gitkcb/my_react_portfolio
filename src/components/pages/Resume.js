
    import React from "react";

    function Resume() {
      return (
        <div>
        <div>
          <p>Resume</p>
          <hr />
    
          <a
          
          href={process.env.PUBLIC_URL + "Kevin_BellResume_2023.pdf"}
          target="_blank" rel="noreferrer"
          >
          <span>
            <i></i>
          </span>
          <span>Download My Resume</span>
          </a>
        </div>
        <div>
          <p>Skills</p>
          <hr />
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            
          </ul>
        </div>
        </div>
      );
    }
    
    export default Resume;
