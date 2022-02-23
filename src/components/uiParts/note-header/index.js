import React from "react";
import "./index.scss";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Image, Header, Icon } from "semantic-ui-react";
import { TwitterShareButton } from "react-share";
import useMedia from "use-media";

const NoteHeader = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	let logo;
	props.gender === "男性" ? (logo = man) : (logo = woman);

	return (
		<div className="note-header-content">
			<Image src={logo} size="tiny" verticalAlign="middle" alt="logo" />
			<Header
				as={isWide ? "h1" : "h2"}
			>{`${props.age}${props.gender}の接種体験`}</Header>
			<Header as={isWide ? "h3" : "h4"}>
				{`${props.name} ${props.gender}/${props.age}/${props.numberOfVaccination}/${props.vaccineType}/${props.secondVaccineType}(2回目)/${props.maxTemperature}`}
			</Header>
			<TwitterShareButton
				url={[`https://vacca-note.com/note/${props.id}`]}
				title={`${props.gender}/${props.age}/${props.numberOfVaccination}/${props.vaccineType}/${props.secondVaccineType}(2回目)/${props.maxTemperature} - Vacca note`}
			>
				<Icon name="twitter" />
				Twitterで共有する
			</TwitterShareButton>
		</div>
	);
};

export default NoteHeader;
