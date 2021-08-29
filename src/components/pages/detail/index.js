import React, { useState, useEffect } from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [note, setNote] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const api = process.env.REACT_APP_SERVER_API + "/note/" + id;
		console.log(api);
		const fetchData = async () => {
			const response = await axios(api);
			setNote(response.data);
		};
		fetchData();
		console.log(note);
	}, []);

	return (
		<div>
			<SubTitle title={`${note.name}さんのワクチン接種体験`} size={"h1"} />
		</div>
	);
};

export default Detail;
