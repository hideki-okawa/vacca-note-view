import React from "react";
import "./index.scss";
import logo from "~/img/vacca-note-logo-green.png";

import { Image, Header } from "semantic-ui-react";
import PostButton from "../post-button";

const TopViewRightContent = (props) => {
	return (
		<div className="top-view-right-content">
			<Image
				src={logo}
				className="top-view-right-logo"
				verticalAlign="middle"
				alt="logo"
			/>
			<Header as="h2" content="ワクチンの接種体験を共有しよう。" />
			<div className="top-view-right-button">
				<PostButton setOpenModal={props.setOpenModal} />
			</div>
		</div>
	);
};

export default TopViewRightContent;
