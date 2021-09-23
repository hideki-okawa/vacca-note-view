import React from "react";
import "./index.scss";
import TopViewLeftContent from "~/components/uiParts/top-view-left-content/index.js";
import TopViewRightContent from "~/components/uiParts/top-view-right-content/index.js";
import TopViewSMPContent from "~/components/uiParts/top-view-smp-content/index.js";

import { Grid } from "semantic-ui-react";
import useMedia from "use-media";

const TopView = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	const pcContent = (
		<Grid className="top-view-content-grid">
			<Grid.Column width={8}>
				<TopViewLeftContent />
			</Grid.Column>
			<Grid.Column width={8} className="top-view-content-grid-right">
				<TopViewRightContent setOpenFormModal={props.setOpenFormModal} />
			</Grid.Column>
		</Grid>
	);

	const smpContent = (
		<TopViewSMPContent setOpenFormModal={props.setOpenFormModal} />
	);

	return <div>{isWide ? pcContent : smpContent}</div>;
};

export default TopView;
