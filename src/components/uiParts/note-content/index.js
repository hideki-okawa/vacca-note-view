import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";

const NoteContent = (props) => {
	return (
		<div className="note-content-wrapper">
			<Header as="h1" content="経過レポート" />
			<p className="note-content-paragraph">{props.log}</p>
			<Header as="h1" content="自由コメント" />
			<p className="note-content-paragraph">{props.remarks}</p>
		</div>
	);
};

export default NoteContent;
