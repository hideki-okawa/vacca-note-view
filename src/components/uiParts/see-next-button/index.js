import React from "react";
import "./index.scss";

import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SeeNextButton = (props) => {
	return (
		<Grid centered columns={1}>
			<Grid.Column textAlign="center">
				<Link to={"/note/" + props.ID} className="see-next-button">
					<h5>続きを見る</h5>
				</Link>
			</Grid.Column>
		</Grid>
	);
};

export default SeeNextButton;
