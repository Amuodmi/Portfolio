import React from "react";
// import Video from "../../images/WebsiteVideo.mp4";
import Beach from "../../images/beach.jpeg";
import { NameSVG } from "../../components/namesvg";

function Home() {
	return (
		<div>
			{/* <div className="cover-bgItem"> */}
			<NameSVG />

			<div className="navBar">
				<h3>
					<a className="navBarText" href="#Resume">
						Resume
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#PreviousProjects">
						Previous Projects
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#Skills">
						Skills
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#About">
						About
					</a>
				</h3>
			</div>

			<div className="vl"></div>
			<video
				poster={Beach}
				autoPlay={true}
				playsInline={true}
				loop={true}
				muted={true}
				// src={Video}
				type="video/mp4"
				className="websiteVideo"
				alt="video for website"
			/>
		</div>
	);
}

export default Home;
