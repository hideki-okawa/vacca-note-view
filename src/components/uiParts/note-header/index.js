import React from "react";
import "./index.scss";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Image, Header } from "semantic-ui-react";

const NoteHeader = (props) => {
	let logo;
	props.gender === "男性" ? (logo = man) : (logo = woman);

	return (
		<div className="note-header-content">
			<Image src={logo} size="tiny" verticalAlign="middle" alt="logo" />
			<Header as="h1">{`${props.age}${props.gender}の接種体験`}</Header>
			<Header as="h3">{`${props.gender}/${props.age}/${props.vaccineType}/${props.numberOfVaccination}/${props.maxTemperature}`}</Header>
		</div>
	);
};

export default NoteHeader;
