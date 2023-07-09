import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Skills from "./Skills";
// import Video from "../../images/WebsiteVideo.mp4";
import Beach from "../../images/beach.jpeg";
import { NameSVG } from "../../components/namesvg";

function Home() {
	const [currentPage, setCurrentPage] = useState("Home");
	function renderPage() {
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Projects") {
			return <Projects />;
		}
		if (currentPage === "Skills") {
			return <Skills />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
	}

	return (
		<div>
			<div class="container">
				{/* <div className="cover-bgItem"> */}
				<NameSVG />
				<div className="navBar">
					<h3>
						<a
							className="navBarText"
							href="#Resume"
							onClick={() => setCurrentPage("Resume")}
						>
							Resume
						</a>
					</h3>
					<h3>
						<a
							className="navBarText"
							href="#PreviousProjects"
							onClick={() => setCurrentPage("PreviousProjects")}
						>
							Previous Projects
						</a>
					</h3>
					<h3>
						<a
							className="navBarText"
							href="#Skills"
							onClick={() => setCurrentPage("Skills")}
						>
							Skills
						</a>
					</h3>
					<h3>
						<a
							className="navBarText"
							href="#About"
							onClick={() => setCurrentPage("About")}
						>
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
				<div class="aboutText">{renderPage()}</div>
			</div>
		</div>
	);
}

export default Home;
