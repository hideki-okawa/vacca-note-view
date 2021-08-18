import React, { useState, useEffect } from "react";
import "./index.scss";
import NotesViewListContentCard from "~/components/uiParts/notes-view-list-content-card/index.js";

import { Grid } from "semantic-ui-react";
import axios from "axios";

const NotesViewListContent = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const api = process.env.REACT_APP_SERVER_API + "/notes";
		const fetchData = async () => {
			const response = await axios(api);
			setNotes(response.data);
		};
		fetchData();
	}, []);

	return (
		<Grid columns={2} stackable>
			{notes.map((note) => {
				return <NotesViewListContentCard note={note} />;
			})}
		</Grid>
	);
};

export default NotesViewListContent;
