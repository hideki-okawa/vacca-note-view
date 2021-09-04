import React, { useState, useEffect } from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";
import * as constants from "~/constants.js";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";

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
			<SubTitle title={`${note.name}さんのワクチン接種体験`} size={"h1"} />
			<Header as="h3">性別:</Header>
			{constants.GENDER_TYPE[note.gender] ? (
				<p>{constants.GENDER_TYPE[note.gender]}</p>
			) : (
				<p>不明</p>
			)}
			<Header as="h3">年齢:</Header>
			{constants.AGE_TYPE[note.age] ? (
				<p>{constants.AGE_TYPE[note.age]}</p>
			) : (
				<p>不明</p>
			)}
			<Header as="h3">ワクチンの種類:</Header>
			{constants.VACCINE_TYPE[note.vaccine_type] ? (
				<p>{constants.VACCINE_TYPE[note.vaccine_type]}</p>
			) : (
				<p>不明</p>
			)}
			<Header as="h3">接種回数:</Header>
			{constants.NUMBER_OF_VACCINATION[note.number_of_vaccination] ? (
				<p>{constants.NUMBER_OF_VACCINATION[note.number_of_vaccination]}</p>
			) : (
				<p>不明</p>
			)}
			<Header as="h3">最高体温:</Header>
			{constants.MAX_TEMPERATURE[note.max_temperature] ? (
				<p>{constants.MAX_TEMPERATURE[note.max_temperature]}</p>
			) : (
				<p>不明</p>
			)}
			<Header as="h3">経過レポート:</Header>
			<p>{log}</p>
			<Header as="h3">コメント:</Header>
			<p>{remarks}</p>
		</div>
	);
};

export default Detail;
