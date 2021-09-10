import React, { useState, useEffect } from "react";
import "./index.scss";
import NotesViewListContentCard from "~/components/uiParts/notes-view-list-content-card/index.js";

import { Card, Header } from "semantic-ui-react";
import axios from "axios";
import useMedia from "use-media";

const NoteRecommend = (props) => {
	const [recommendNotes, setRecommendNotes] = useState([]);
	const isWide = useMedia({ minWidth: "767px" });

	useEffect(() => {
		const api = `${process.env.REACT_APP_SERVER_API}/notes/recommend?vaccine_type=${props.vaccineType}&number_of_vaccination=${props.numberOfVaccination}&age=${props.age}`;
		console.log("api-debug", api);
		const fetchData = async () => {
			const response = await axios(api);
			setRecommendNotes(response.data);
			console.log("recommendNotes-deubg1", recommendNotes);
		};
		fetchData();
	}, [props.age]);

	let noteRecommendNotes;
	if (recommendNotes) {
		noteRecommendNotes = (
			<div>
				<div
					className={
						isWide ? "note-recommend-header-pc" : "note-recommend-header-smp"
					}
				>
					<Header
						as={isWide ? "h1" : "h3"}
						content="あなたにおすすめの接種体験"
					/>
				</div>
				<div
					className={
						isWide
							? "note-recommend-notes note-recommend-pc"
							: "note-recommend-notes"
					}
				>
					<Card.Group itemsPerRow={isWide ? 2 : 1}>
						{recommendNotes.map((note) => {
							return <NotesViewListContentCard note={note} />;
						})}
					</Card.Group>
				</div>
			</div>
		);
	}

	return <div>{noteRecommendNotes}</div>;
};

export default NoteRecommend;
