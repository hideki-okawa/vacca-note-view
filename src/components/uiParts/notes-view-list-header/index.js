import React from "react";
import PostButton from "~/components/uiParts/post-button/index.js";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Grid, Label } from "semantic-ui-react";
import useMedia from "use-media";

const NotesViewListHeader = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	const pcContent = (
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<SubTitle title={"ワクチン接種体験"} />
			</Grid.Column>
			<Grid.Column textAlign="right" width={8} verticalAlign="middle">
				<PostButton setOpenModal={props.setOpenModal} />
			</Grid.Column>
		</Grid>
	);

	const smpContent = (
		<Grid>
			<Grid.Column width={12} verticalAlign="middle">
				<SubTitle size="h2" title={"ワクチン接種体験"} />
			</Grid.Column>
			<Grid.Column width={4} verticalAlign="middle">
				<Label circular color="teal" key="teal" size="large">
					{props.notesCount}件
				</Label>
			</Grid.Column>
		</Grid>
	);

	return <header>{isWide ? pcContent : smpContent}</header>;
};

export default NotesViewListHeader;
