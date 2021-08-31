import React from "react";
import "./index.scss";
import character from "~/img/top-view-character.png";

import { Image } from "semantic-ui-react";

const TopViewSMPContent = () => {
	return (
		<div className="top-view-smp-content">
			<Image
				src={character}
				className="top-view-smp-character"
				alt="character"
			/>
		</div>
	);
};

export default TopViewSMPContent;
