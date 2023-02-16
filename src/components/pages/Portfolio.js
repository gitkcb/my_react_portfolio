import React from "react";
import Project from "../Project";

const projects = [
	{
		id: 0,
		title: "Headspace.ai",
		languages: "JavaScript, SQL, Node.js, Handlebars.js",
		image: "/images/headspaceai.png",
		description: "Prompt your own AI generated image and save to your gallery!",
		repo: "https://github.com/theLemmonade/project-headspace.ai",
		live: "https://headspaceai.herokuapp.com/",
	},
	{
		id: 1,
		title: "Film Findr",
		languages: "JavaScript, HTML, CSS",
		image: "/images/filmfindr.png",
		description: "Search for movies and save to your favorites!",
		repo: "https://github.com/MikeWebPrint/movie-wishlist",
		live: "https://mikewebprint.github.io/movie-wishlist/"
	},
	{
		id: 2,
		title: "Work Day Scheduler",
		languages: "JavaScript",
		image: "/images/workdayschedule.png",
		description: "Keep track of your hourly to-do's with this daily scheduling app",
		live: "https://gitkcb.github.io/daily_schedule/",
		repo: "https://github.com/gitkcb/daily_schedule",
	},
	{
		id: 3,
		title: "Text Editor",
		languages: "Javascript, CSS, HTML",
		image: "/images/texteditor.png",
		description: "Save your text on this app!",
		live: "https://kevin-jate-2023.herokuapp.com/",
		repo: "https://github.com/gitkcb/text_editor",
	},
	{
		id: 4,
		title: "My Portfolio",
		languages: "CSS",
		image: "/images/cssportfolio.png",
		description: "My CSS portfolio",
		live: "https://gitkcb.github.io/my_portfolio/",
		repo: "https://github.com/gitkcb/my_portfolio",
	},
	{
		id: 5,
		title: "Note Taking",
		languages: "JavaScript, HTML, CSS",
		image: "/images/notetaker.png",
		description: "Save notes using this app",
		live: "https://note-taker-kb-2022.herokuapp.com/",
		repo: "https://github.com/gitkcb/note-taking",
	},
];

function Portfolio() {
	return (
		<div>
			<p>Portfolio</p>
		<hr />

			<Project projects={projects} />
		</div>
	);
}

export default Portfolio;