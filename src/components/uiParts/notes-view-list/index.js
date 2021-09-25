import React from "react";
import "./index.scss";
import NotesViewListHeader from "~/components/uiParts/notes-view-list-header/index.js";
import NotesViewListContent from "~/components/uiParts/notes-view-list-content/index.js";

const NotesViewList = (props) => {
	return (
		<div>
			<NotesViewListHeader
				setOpenFormModal={props.setOpenFormModal}
				notesCount={props.notesCount}
			/>
			<div className="notes-view-list-content">
				<NotesViewListContent
					openFormModal={props.openFormModal}
					setNotesCount={props.setNotesCount}
				/>
			</div>
		</div>
	);
};

export default NotesViewList;
