import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";

const NotesViewFilter = () => {
	return (
		<div className="notes-view-filter">
			<div className="notes-view-filter-content">
				<div className="notes-view-filter-content-list-header">
					<Header as="h2">絞り込み機能　coming soon...</Header>
				</div>
				{/* <div className="notes-view-filter-content-list-gender">
					<Header as="h3">性別</Header>
				</div> */}
			</div>
		</div>
	);
};

export default NotesViewFilter;
