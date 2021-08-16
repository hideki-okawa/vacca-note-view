import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";

const NotesViewFilter = () => {
	return (
		<div className="notes-view-filter">
			<div className="notes-view-filter-content">
				<Header as="h3">絞り込み</Header>
			</div>
		</div>
	);
};

export default NotesViewFilter;
