import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ResumeFile from "../../resume/Michelle_Douma_Resume_2023.pdf";
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
		if (currentPage === "Contact") {
			return <Contact />;
		}
	}

	return (
		<div>
			<div className="container">
				<div>
					<a href="/">
						<NameSVG />
					</a>
				</div>
				<div className="navBar">
					<h3>
						<a className="navBarText" href={ResumeFile} download>
							Resume
						</a>
					</h3>
					<h3>
						<a
							className="navBarText"
							href="#PreviousProjects"
							onClick={() => setCurrentPage("Projects")}
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
				<div>{renderPage()}</div>
			</div>
		</div>
	);
}

export default Home;
