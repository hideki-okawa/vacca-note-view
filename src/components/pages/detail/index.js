import React, { useState, useEffect } from "react";
import * as constants from "~/constants.js";
import NoteHeader from "~/components/uiParts/note-header/index.js";
import NoteContent from "~/components/uiParts/note-content/index.js";
import NoteRecommend from "~/components/uiParts/note-recommend/index.js";

import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [note, setNote] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const api = process.env.REACT_APP_SERVER_API + "/note/" + id;
		const fetchData = async () => {
			const response = await axios(api);
			setNote(response.data);
		};
		fetchData();
	}, [id]);

	let gender;
	constants.GENDER_TYPE[note.gender]
		? (gender = constants.GENDER_TYPE[note.gender])
		: (gender = "不明");

	let age;
	constants.AGE_TYPE[note.age]
		? (age = constants.AGE_TYPE[note.age])
		: (age = "不明");

	let vaccineType;
	constants.VACCINE_TYPE[note.vaccine_type]
		? (vaccineType = constants.VACCINE_TYPE[note.vaccine_type])
		: (vaccineType = "不明");

	let numberOfVaccination;
	constants.NUMBER_OF_VACCINATION[note.number_of_vaccination]
		? (numberOfVaccination =
				constants.NUMBER_OF_VACCINATION[note.number_of_vaccination])
		: (numberOfVaccination = "不明");

	let maxTemperature;
	constants.MAX_TEMPERATURE[note.max_temperature]
		? (maxTemperature = constants.MAX_TEMPERATURE[note.max_temperature])
		: (maxTemperature = "不明");

	let log;
	if (note.log !== undefined) {
		log = note.log.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	let remarks;
	if (note.remarks !== undefined) {
		remarks = note.remarks.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	return (
		<div>
			<NoteHeader
				age={age}
				gender={gender}
				name={note.name}
				vaccineType={vaccineType}
				numberOfVaccination={numberOfVaccination}
				maxTemperature={maxTemperature}
			/>
			<NoteContent log={log} remarks={remarks} />
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
