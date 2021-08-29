import React, { useState } from "react";
import "./index.scss";
import NotesViewFilter from "~/components/uiParts/notes-view-filter/index.js";
import NotesViewList from "~/components/uiParts/notes-view-list/index.js";
import NotesViewCount from "~/components/uiParts/notes-view-count/index.js";

import { Grid } from "semantic-ui-react";

const NotesView = (props) => {
	const [notesCount, setNotesCount] = useState(0);

	return (
		<div className="notes-view">
			<Grid centered>
				<Grid.Column textAlign width={4}>
					<NotesViewCount notesCount={notesCount} />
					<NotesViewFilter />
				</Grid.Column>
				<Grid.Column width={12}>
					<NotesViewList
						setOpenModal={props.setOpenModal}
						setNotesCount={setNotesCount}
					/>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default NotesView;
