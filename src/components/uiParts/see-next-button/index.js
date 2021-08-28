import React from "react";
import "./index.scss";

import { Grid } from "semantic-ui-react";

const SeeNextButton = (props) => {
	return (
		<Grid centered columns={1}>
			<Grid.Column textAlign="center">
				<a
					href="#!"
					className="see-next-button"
					onClick={() => {
						// props.setOpenModal(true);
					}}
				>
					<h5>続きを見る</h5>
				</a>
			</Grid.Column>
		</Grid>
	);
};

export default SeeNextButton;
