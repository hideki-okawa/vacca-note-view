import React, { useState, useEffect } from "react";
import "./index.scss";
import NotesViewListContentCard from "~/components/uiParts/notes-view-list-content-card/index.js";

import { Card, Dimmer, Loader, Pagination } from "semantic-ui-react";
import axios from "axios";
import useMedia from "use-media";

const NotesViewListContent = (props) => {
	const [notes, setNotes] = useState([]);
	const [numPageCount, setNumPageCount] = useState(1);
	const [activePage, setActivePage] = useState(1);
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));
	const [loading, setLoading] = useState(true);
	const isWide = useMedia({ minWidth: "767px" });

	useEffect(() => {
		const fetchData = async () => {
			let token;
			if (jwt == null) {
				const jwtAPI = process.env.REACT_APP_SERVER_API + "/auth";
				const response = await axios(jwtAPI);
				setJWT(response.data.token);
				token = response.data.token;
				window.localStorage.setItem("jwt", token);
			} else {
				token = jwt;
			}

			const api = process.env.REACT_APP_SERVER_API + "/notes";
			const response = await axios.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setNotes(response.data);
			props.setNotesCount(response.data.length);
			setNumPageCount(Math.ceil(response.data.length / 10));
			setLoading(false);
		};
		fetchData();
	}, [props.openFormModal]);

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

	const handlePaginationChange = (e, { activePage }) => {
		setActivePage(activePage);
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Card.Group itemsPerRow={isWide ? 2 : 1}>
				{loadingComponent}
				{notes.slice((activePage - 1) * 10, activePage * 10).map((note) => {
					return <NotesViewListContentCard note={note} />;
				})}
			</Card.Group>
			<div className="note-pagination">
				<Pagination
					activePage={activePage}
					onPageChange={handlePaginationChange}
					firstItem={null}
					lastItem={null}
					pointing
					secondary
					totalPages={numPageCount}
				/>
			</div>
		</>
	);
};

export default NotesViewListContent;
