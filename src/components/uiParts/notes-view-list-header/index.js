import React from "react";
import PostButton from "~/components/uiParts/post-button/index.js";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Grid } from "semantic-ui-react";
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

	const smpContent = <SubTitle size="h2" title={"ワクチン接種体験"} />;

	return <header>{isWide ? pcContent : smpContent}</header>;
};

export default NotesViewListHeader;
