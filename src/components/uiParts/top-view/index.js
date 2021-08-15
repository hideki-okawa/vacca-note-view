import React from "react";
import { Grid } from "semantic-ui-react";
import TopViewLeftContent from "~/components/uiParts/top-view-left-content/index.js";
import TopViewRightContent from "~/components/uiParts/top-view-right-content/index.js";

const TopView = () => {
	return (
		<div>
			<Grid>
				<Grid.Column width={8}>
					<TopViewLeftContent className="top-view-right" />
				</Grid.Column>
				<Grid.Column width={8}>
					<TopViewRightContent className="top-view-right" />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default TopView;
