import React from "react";
import Gift from "../../images/projectsImage/giftyouUp.png";
import Music from "../../images/projectsImage/musicboximage.png";

function Projects() {
	return (
		<div className="projectsLayout">
			<div>
				<a href="https://gift-you-up.onrender.com/" target="_blank">
					<img
						className="Gift"
						src={Gift}
						alt="screenshot of website with wrapped present in center"
					/>
				</a>
			</div>
			<div>
				<a href="https://beca-d.github.io/music-box/" target="_blank">
					<img
						className="Music"
						src={Music}
						alt="screenshot of website with famous artist in banner"
					/>
				</a>
			</div>
		</div>
	);
}

export default Projects;
