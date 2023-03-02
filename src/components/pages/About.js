import React from 'react';

export default function About() {
  return (
    <div className = "container-base">
      <p className="text-end fs-1 me-5">About Me</p>
      <hr />
      <div className = "row justify-content-center">
        <div className = "col-4">
          <img src="/images/me.jpg" className= "rounded-pill"></img>
        </div>
      
      <div className ="col-6">
      <p className ="content text-wrap">
       conten tconte ntconten content
       conten tcontent
       contentcontentconten
       tcontent content
       contentcontentcontentc ontentcontent content contentconten tcontentcontentcontent contentcontentcontent contentcontentc ontentcontentcontentcont entcontentcontent contentcontentcont entcontentcontent contentco ntentconten tcontentcontentc ontentcontentcontent
      </p>
      </div>
      </div>
    </div>
  );
}
