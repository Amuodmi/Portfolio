import React from "react";
import profilePhoto from "../../images/profilePhoto.jpg";

function About() {
	return (
		<div>
			<div className="aboutText">
				<h3>Hi, nice to meet you.</h3>
				<p>
					I was first introduced to coding when I lived in Berlin, Germany.
					<br />
					After moving back to Canada my life <br />
					took a different direction for awhile,
					<br /> and it wasn't until I found the UofT bootcamp <br />
					that I began to sit in the hot seat again.
				</p>
			</div>
			<div>
				<img
					className="profilePhoto"
					src={profilePhoto}
					alt="blonde haired woman smiling"
				></img>
			</div>
		</div>
	);
}

export default About;
