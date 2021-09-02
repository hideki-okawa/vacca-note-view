import React from "react";
import "./index.scss";
import character from "~/img/top-view-character.png";
import logo from "~/img/vacca-note-logo-green.png";
import PostButton from "~/components/uiParts/post-button/index.js";

import { Image, Header } from "semantic-ui-react";

const TopViewSMPContent = (props) => {
	return (
		<div className="top-view-smp-content">
			<Image
				src={character}
				className="top-view-smp-character"
				alt="character"
			/>
			<Image
				src={logo}
				className="top-view-right-logo"
				verticalAlign="middle"
				alt="logo"
			/>
			<Header as="h3" content="ワクチンの接種体験を共有しよう。" />
			<div className="top-view-right-button">
				<PostButton setOpenModal={props.setOpenModal} />
			</div>
		</div>
	);
};

export default TopViewSMPContent;
