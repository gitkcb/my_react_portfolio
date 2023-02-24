import React from "react";

function Project(props) {
	return (
		<div className = "row row-cols-2 row-cols-sm-3 ">
				{props.projects.map((project) => (
					<div className="card text-center">
						<div className="card-body">
							
								<div className="card-img">
									<a href={project.live} target="_blank" rel="noreferrer">
										<img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
									</a>
								</div>
							
							<div className="card-content">
								
									<div className=""></div>
									<div className="">
										<p className="" key={project.id}>
											{project.title}
										</p>
									</div>
								

								<div className="">
									{project.description}
									<br />
									<br />
									<div className="">
										Languages: {project.languages}
										<br />

									</div>
									
										<footer className="card-footer">
											<a
												href={project.live}
												className="card-footer-item"
												target="_blank" rel="noreferrer"
											>
												Deployed Site/App

											</a>
											<br />
											<a
												href={project.repo}
												className="card-footer-item"
												target="_blank" rel="noreferrer"
											>
												Github Repo
											</a>
										</footer>
									</div>
								</div>
							</div>
						</div>
					
				))}
				</div>
		
	);
}

export default Project;
