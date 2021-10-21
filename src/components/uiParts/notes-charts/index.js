import React, { useState } from "react";
// import "./index.scss";
import NotesChart from "~/components/uiParts/notes-chart/index.js";

import { Card, Dimmer, Loader } from "semantic-ui-react";
import useMedia from "use-media";

const NotesCharts = (props) => {
	const [loading, setLoading] = useState(true);
	const isWide = useMedia({ minWidth: "767px" });

	let loader = (
		<Dimmer active inverted>
			<Loader>Loading</Loader>
		</Dimmer>
	);

	let loadingComponent;
	if (loading) {
		loadingComponent = loader;
	} else {
		loadingComponent = null;
	}

	return (
		<Card.Group itemsPerRow={isWide ? 2 : 1}>
			{/* {loadingComponent} */}
			{/* {notes.slice((activePage - 1) * 10, activePage * 10).map((note) => {
				return <NotesViewListContentCard note={note} />;
			})} */}
			<NotesChart />
		</Card.Group>
	);
};

export default NotesCharts;
