import React from "react";
import "./index.scss";
import TopViewLeftContent from "~/components/uiParts/top-view-left-content/index.js";
import TopViewRightContent from "~/components/uiParts/top-view-right-content/index.js";

import { Grid } from "semantic-ui-react";

const TopView = () => {
	return (
		<div>
			<Grid className="top-view-content-grid">
				<Grid.Column width={8} verticalAlign="middle">
					<TopViewLeftContent />
				</Grid.Column>
				<Grid.Column
					width={8}
					verticalAlign="middle"
					className="top-view-content-grid-right"
				>
					<TopViewRightContent />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default TopView;
