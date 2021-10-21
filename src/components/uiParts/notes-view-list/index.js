import React, { useState } from "react";
import "./index.scss";
import NotesViewListHeader from "~/components/uiParts/notes-view-list-header/index.js";
import NotesViewListContent from "~/components/uiParts/notes-view-list-content/index.js";
import NotesCharts from "~/components/uiParts/notes-charts/index.js";

const NotesViewList = (props) => {
	const [activeItem, setActiveItem] = useState("ワクチン接種体験");

	var content;
	if (activeItem === "統計情報") {
		content = <NotesCharts />;
	} else {
		content = (
			<NotesViewListContent
				openFormModal={props.openFormModal}
				setNotesCount={props.setNotesCount}
			/>
		);
	}

	return (
		<div>
			<NotesViewListHeader
				setOpenFormModal={props.setOpenFormModal}
				notesCount={props.notesCount}
				activeItem={activeItem}
				setActiveItem={setActiveItem}
			/>
			<div className="notes-view-list-content">{content}</div>
		</div>
	);
};

export default NotesViewList;
