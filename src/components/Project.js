import React from "react";

function Project(props) {
	return (
		<div className = "row row-cols-2 row-cols-sm-3 justify-content-center">
			{props.projects.map((project) => (
				<div className="card text-center  m-5">
					<div className="card-body">
						<div className="card-img border">
							<a href={project.live} target="_blank" rel="noreferrer">
								<img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
							</a>
						</div>
					<div className="card-content">
						<div className="text-uppercase fs-3 mt-2">
							<p className="" key={project.id}>
								{project.title}
							</p>
						</div>
					<div className=" fs-5">
						{project.description}
							<br/>
							<br/>
							
						
						<footer className="card-footer">
						<div className="">
							Languages: {project.languages}
							<br />
						</div>
							<a href={project.repo} className="card-footer-item hyperlink" target="_blank" rel="noreferrer">
							Github Repo
							</a>
						</footer>

					</div>
					</div>
					</div>
				
				</div>
				
					
				))}
			<div>
			<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
			</div>

				</div>
		
	);
}

export default Project;
