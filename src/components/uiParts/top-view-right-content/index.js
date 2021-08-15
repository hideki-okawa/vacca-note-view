import React from "react";
import "./index.scss";
import logo from "~/img/vacca-note-logo-green.svg";

import { Image } from "semantic-ui-react";

const TopViewRightContent = () => {
	return (
		<div>
			<Image
				src={logo}
				className="top-view-right-logo"
				verticalAlign="middle"
				alt="logo"
			/>
		</div>
	);
};

export default TopViewRightContent;
