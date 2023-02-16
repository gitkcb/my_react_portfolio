import React from "react";

function Project(props) {
	return (
		<div>
		<div className="">
			{props.projects.map((project) => (
			<div className="">
				<div className="card">
				<div className="card-image">
					<figure className="">
					<a href={project.live} target="_blank" rel="noreferrer">
						<img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
					</a>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
					<div className="media-left"></div>
					<div className="media-content">
						<p className="title is-4" key={project.id}>
						{project.title}
						</p>
					</div>
					</div>

					<div className="content has-text-left">
					{project.description}
					<br />
					<br />
					<div className="content is-family-code">
						Languages: {project.languages}
						<br />
						
					</div>
					<div className="card">
						<footer className="card-footer">
						<a
							href={project.repo}
							className="card-footer-item"
							target="_blank" rel="noreferrer"
						>
							Github Repo
						</a>
						<br />
						<a
							href={project.live}
							className="card-footer-item"
							target="_blank" rel="noreferrer"
						>
							Deployed Site/App
						</a>
						</footer>
					</div>
					</div>
				</div>
				</div>
			</div>
			))}
		</div>
		</div>
	);
}

export default Project;
