import React, { useState, useEffect } from "react";
import ReturnOriginalNote from "~/common.js";
import NoteHeader from "~/components/uiParts/note-header/index.js";
import NoteContent from "~/components/uiParts/note-content/index.js";
import NoteRecommend from "~/components/uiParts/note-recommend/index.js";

import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [note, setNote] = useState({});
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));
	const { id } = useParams();

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

			const api = process.env.REACT_APP_SERVER_API + "/note/" + id;
			const response = await axios.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setNote(response.data);
		};
		fetchData();
	}, [id]);

	let originalNote = ReturnOriginalNote(note);

	return (
		<div>
			<NoteHeader
				id={id}
				age={originalNote.age}
				gender={originalNote.gender}
				name={note.name}
				numberOfVaccination={originalNote.numberOfVaccination}
				vaccineType={originalNote.vaccineType}
				secondVaccineType={originalNote.secondVaccineType}
				maxTemperature={originalNote.maxTemperature}
			/>
			<NoteContent log={originalNote.log} remarks={originalNote.remarks} />
			<NoteRecommend
				id={id}
				vaccineType={note.vaccine_type}
				numberOfVaccination={note.number_of_vaccination}
				age={note.age}
			/>
		</div>
	);
};

export default Detail;
