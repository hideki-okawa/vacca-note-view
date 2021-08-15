import React from "react";
import "./index.scss";
import logo from "~/img/vacca-note-logo.svg";

import { Icon, Grid, Image } from "semantic-ui-react";

const Header = () => {
	return (
		<header className="header">
			<Grid>
				<Grid.Column width={9}>
					<Image src={logo} className="title-logo" alt="logo" />
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={1}
					verticalAlign="middle"
					// onClick={() =>{
					//   setActiveSideBar(true)
					// }}
				>
					<Icon name="sidebar" />
				</Grid.Column>
			</Grid>
		</header>
	);
};

export default Header;
