import React from "react";
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="App-header row">
         <nav className='navbar row'>
        <div className='navbar-brand col-md-4'>
            
                <h1 className= 'header-name text-center'> BELL</h1>
            
        </div> 
      <ul className="navbar list-unstyled d-flex justify-content-end col-md-6 me-5">
        <li className="nav-item fs-4">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me 
          </a>
        </li>
        <li className="nav-item fs-4">
        
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio  
          </a>
        </li>
        <li className="nav-item fs-4">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact  
          </a>
        </li>
    
        <li className="nav-item fs-4">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
      </nav>
    </div>
   
  );
}

export default Navigation;
