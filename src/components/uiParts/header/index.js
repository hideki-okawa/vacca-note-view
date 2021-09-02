import React from "react";
import "./index.scss";
import logo from "~/img/vacca-note-logo.png";

import { Icon, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useMedia from "use-media";

const Header = () => {
	const isWide = useMedia({ minWidth: "767px" });

	const pcImage = (
		<Image
			src={logo}
			className="title-logo-size title-logo-position"
			alt="logo"
		/>
	);

	const smpImage = (
		<Image
			src={logo}
			className="title-logo-smp-size title-logo-position"
			alt="logo"
		/>
	);

	return (
		<header className="header">
			<Menu fixed="top" text>
				<Menu.Item header>
					<Link to="/">{isWide ? pcImage : smpImage}</Link>
				</Menu.Item>
				<Menu.Item position="right">
					<div className="sidebar-position">
						<Icon name="sidebar" />
					</div>
				</Menu.Item>
			</Menu>
		</header>
	);
};

export default Header;
