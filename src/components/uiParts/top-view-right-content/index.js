import React from "react";
import "./index.scss";
import logo from "~/img/vacca-note-logo-green.svg";

import { Image } from "semantic-ui-react";

const TopViewRightContent = () => {
	return (
		<div className="top-view-right-content">
			<Image
				src={logo}
				className="top-view-right-logo"
				verticalAlign="middle"
				alt="logo"
			/>
			<h3>ワクチンの接種体験を共有しよう。</h3>
		</div>
	);
};

export default TopViewRightContent;
