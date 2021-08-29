import React from "react";
import "./index.scss";

import { Statistic } from "semantic-ui-react";

const NotesViewCount = (props) => {
	return (
		<div className="notes-view-count">
			<Statistic>
				<Statistic.Label>接種体験数</Statistic.Label>
				<Statistic.Value>{props.notesCount}</Statistic.Value>
				<Statistic.Label>件</Statistic.Label>
			</Statistic>
		</div>
	);
};

export default NotesViewCount;
