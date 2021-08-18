import React from "react";
import "./index.scss";
import NotesViewFilter from "~/components/uiParts/notes-view-filter/index.js";
import NotesViewList from "~/components/uiParts/notes-view-list/index.js";

import { Grid } from "semantic-ui-react";

const NotesView = () => {
	return (
		<div className="notes-view">
			<Grid centered>
				<Grid.Column textAlign width={4}>
					<NotesViewFilter />
				</Grid.Column>
				<Grid.Column width={12}>
					<NotesViewList />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default NotesView;
