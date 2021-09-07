import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";
import useMedia from "use-media";

const NoteContent = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	return (
		<div className="note-content-wrapper">
			<Header as={isWide ? "h1" : "h3"} content="経過レポート" />
			<p
				className={
					isWide ? "note-content-paragraph-pc" : "note-content-paragraph-smp"
				}
			>
				{props.log}
			</p>
			<Header as={isWide ? "h1" : "h3"} content="自由コメント" />
			<p
				className={
					isWide ? "note-content-paragraph-pc" : "note-content-paragraph-smp"
				}
			>
				{props.remarks}
			</p>
		</div>
	);
};

export default NoteContent;
