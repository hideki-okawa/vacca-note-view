import React, { useState, useEffect } from "react";
import "./index.scss";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Grid, Segment, Header, Image } from "semantic-ui-react";
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
				return (
					<Grid.Column>
						<Segment raised>
							<Header as="h3">
								<Image src={man} />
								{/* <Header.Content>男性/20代/ファイザー/1回目/36.5℃</Header.Content> */}
								<Header.Content>
									{`${note.gender}/${note.age}/${note.vaccine_type}/$
								{note.number_of_vaccination}/${note.max_temperature}`}
								</Header.Content>
							</Header>
							<p className="note-paragraph"></p>
						</Segment>
					</Grid.Column>
				);
			})}
		</Grid>
	);
};

export default NotesViewListContent;
