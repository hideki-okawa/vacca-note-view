import React from "react";
import "./index.scss";
import { Header, Grid } from "semantic-ui-react";

import PostButton from "../post-button";

const NotesViewListHeader = () => {
	return (
		<header>
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<h1 className="notes-view-list-header">ワクチン接種体験</h1>
				</Grid.Column>
				<Grid.Column textAlign="right" width={8} verticalAlign="middle">
					<PostButton />
				</Grid.Column>
			</Grid>
		</header>
	);
};

export default NotesViewListHeader;
