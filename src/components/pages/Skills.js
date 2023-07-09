import React from "react";
import JS from "../../images/skillsImage/JSsymbol.svg";
import Bash from "../../images/skillsImage/bash.svg";

function Skills() {
	return (
		<div className="skillsLayout">
			<img src={JS} alt="Javascript Logo">
				Javascript
			</img>
			<img src={Bash} alt="Bash Logo">
				Bash
			</img>
		</div>
	);
}

export default Skills;
