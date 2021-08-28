import React from "react";
import { Grid } from "semantic-ui-react";

import PostButton from "~/components/uiParts/post-button/index.js";
import SubTitle from "~/components/uiParts/sub-title/index.js";

const NotesViewListHeader = (props) => {
	return (
		<header>
			<Grid>
				<Grid.Column width={8} verticalAlign="middle">
					<SubTitle title={"ワクチン接種体験"} />
				</Grid.Column>
				<Grid.Column textAlign="right" width={8} verticalAlign="middle">
					<PostButton setOpenModal={props.setOpenModal} />
				</Grid.Column>
			</Grid>
		</header>
	);
};

export default NotesViewListHeader;
