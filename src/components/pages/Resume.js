
    import React from "react";

    function Resume() {
      return (
        <div className= "container-base">
        <div>
        <p className="text-end fs-1 me-5">Resume</p>
          <hr />
    
         <div className = "row d-flex justify-content-around">
        
        <div className ="card col-sm-12 col-md-3 ">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Front-End Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>HTML5/CSS3</li>
            <li>JavaScript ES6+</li>
            <li>BootStrap</li>
            <li>React</li>
            <li>Third Party APIs</li>
            
            
          </ul>
          </div>
        </div>
        </div>
        <div className ="card col-sm-12 mt-sm-4 col-md-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Back-End Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Sequelize ORM</li>
            
          </ul>
          </div>
        </div>
        </div>
        <div className ="card col-sm-12 mt-sm-4 col-md-3">
        <div className = "card-body">
          <p className ="text-center mt-4 fs-2 text-decoration-underline">Soft Skills</p>
          <div className = "card-content">
          <ul className ="text-center mt-4 fs-5 list-unstyled">
            <li>Team Collaboration</li>
            <li>Agile Development</li>
            <li>Problem Solving</li>
            <li>Self-Motivated</li>
            
            
          </ul>
          </div>
        </div>
        </div>
   
        </div>
        </div>
        <div className ="row p-5 m-5">
        </div>

        <div className = "row">
          <div className = " col-4 position-absolute end-0">
        <a href={process.env.PUBLIC_URL + "/Kevin_BellResume_2023.pdf"}
          target="_blank" rel="noreferrer" className="hyperlink">
          
          <p className ="text-end fs-4 me-5">Download My Resume</p>
          </a>
        </div>
        </div>
        <div className ="row p-5">
        </div>
           <div className ="row">

        </div>
       
        
        </div>

      );
    }
    
    export default Resume;
