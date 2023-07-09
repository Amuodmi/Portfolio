import React from "react";
import Bash from "../../images/skillsImage/bash.svg";
import Boots from "../../images/skillsImage/bootstrap.svg";
import Bulma from "../../images/skillsImage/bulma.svg";
import Css from "../../images/skillsImage/css.svg";
import Express from "../../images/skillsImage/express.svg";
import Figma from "../../images/skillsImage/figma.svg";
import Git from "../../images/skillsImage/git.svg";
import Graph from "../../images/skillsImage/graphql.svg";
import Handle from "../../images/skillsImage/handlebars.svg";
import Heroku from "../../images/skillsImage/heroku.svg";
import Jest from "../../images/skillsImage/jest.svg";
import Jquery from "../../images/skillsImage/jquery.svg";
import MongoDB from "../../images/skillsImage/mongodb.svg";
import MySQL from "../../images/skillsImage/mysql.svg";
import Node from "../../images/skillsImage/nodejs.svg";
import ReactLogo from "../../images/skillsImage/react.svg";
import Redux from "../../images/skillsImage/redux.svg";
import Sequelize from "../../images/skillsImage/sequelize.svg";

function Skills() {
	return (
		<>
			<div className="skillsLayout">
				<div>
					<img className="Bash" src={Bash} alt="Bash Logo" />
				</div>
				<div>
					<img className="Boots" src={Boots} alt="Bootstrap Logo" />
				</div>
				<div>
					<img className="Bulma" src={Bulma} alt="Bulma Logo" />
				</div>
				<div>
					<img className="CSS" src={Css} alt="CSS Logo" />
				</div>
				<div>
					<img className="Express" src={Express} alt="Express Logo" />
				</div>
				<div>
					<img className="Figma" src={Figma} alt="Figma Logo" />
				</div>
				<div>
					<img className="Git" src={Git} alt="Git Logo" />
				</div>
				<div>
					<img className="Graph" src={Graph} alt="Graph Logo" />
				</div>
			</div>

			<div className="skillsLayout2">
				<div>
					<img className="Handle" src={Handle} alt="Handlebars Logo" />
				</div>
				<div>
					<img className="Heroku" src={Heroku} alt="Heroku Logo" />
				</div>
				<div>
					<img className="Jest" src={Jest} alt="Jest Logo" />
				</div>
				<div>
					<img className="Jquery" src={Jquery} alt="Jquery Logo" />
				</div>
				<div>
					<img className="MongoDB" src={MongoDB} alt="MongoDB Logo" />
				</div>
				<div>
					<img className="MySQL" src={MySQL} alt="MySQL Logo" />
				</div>
				<div>
					<img className="Node" src={Node} alt="NodeJS Logo" />
				</div>
				<div>
					<img className="React" src={ReactLogo} alt="React Logo" />
				</div>
				<div>
					<img className="Redux" src={Redux} alt="Redux Logo" />
				</div>
				<div>
					<img className="Sequelize" src={Sequelize} alt="Sequelize Logo" />
				</div>
			</div>
		</>
	);
}

export default Skills;
