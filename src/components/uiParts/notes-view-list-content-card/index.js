import React from "react";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Grid, Segment, Header, Image } from "semantic-ui-react";

const NotesViewListContentCard = (props) => {
	let note = props.note;

	return (
		<Grid.Column>
			<Segment raised>
				<Header as="h3">
					<Image src={man} />
					<Header.Content>
						{`${note.gender}/${note.age}/${note.vaccine_type}/$
								{note.number_of_vaccination}/${note.max_temperature}`}
					</Header.Content>
				</Header>
				<p className="note-paragraph"></p>
			</Segment>
		</Grid.Column>
	);
};

export default NotesViewListContentCard;
