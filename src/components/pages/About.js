import React from "react";
import profilePhoto from "../../images/profilePhoto.jpg";

function About() {
	return (
		<div>
			<div className="aboutText">
				<h3>Hi, nice to meet you.</h3>
				<p>I was first introduced to coding when I lived in Berlin, Germany.</p>
				<p>
					After moving back to Canada my life{" "}
					<p>took a different direction for awhile,</p>
				</p>
				<p> and it wasn't until I found the UofT bootcamp </p>{" "}
				<p>that I began to sit in the hot seat again.</p>
			</div>
			<div>
				<img
					className="profilePhoto"
					src={profilePhoto}
					alt="image of blonde haired woman smiling"
				></img>
			</div>
		</div>
	);
}

export default About;
