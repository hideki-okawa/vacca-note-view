import React from "react";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Grid, Segment, Header, Image } from "semantic-ui-react";

const setGendar = (genderNum) => {
	let gender;
	switch (genderNum) {
		case "1":
			gender = "男性";
			break;
		case "2":
			gender = "女性";
			break;
		default:
			gender = "性別不明";
	}
	return gender;
};

const setImage = (genderNum) => {
	let image;
	switch (genderNum) {
		case "1":
			image = man;
			break;
		case "2":
			image = woman;
			break;
		default:
			image = "";
	}
	return image;
};

const setAge = (ageNum) => {
	let age;
	switch (ageNum) {
		case "1":
			age = "10代以下";
			break;
		case "2":
			age = "20代";
			break;
		case "3":
			age = "30代";
			break;
		case "4":
			age = "40代";
			break;
		case "5":
			age = "50代";
			break;
		case "6":
			age = "60代";
			break;
		case "7":
			age = "70代";
			break;
		case "8":
			age = "80代";
			break;
		case "9":
			age = "90代以上";
			break;
		default:
			age = "年齢不明";
	}
	return age;
};

const setVaccineType = (vaccineTypeSymbol) => {
	let vaccineType;
	switch (vaccineTypeSymbol) {
		case "M":
			vaccineType = "モデルナ";
			break;
		case "F":
			vaccineType = "ファイザー";
			break;
		case "A":
			vaccineType = "アストラゼネカ";
			break;
		default:
			vaccineType = "ワクチン種不明";
	}
	return vaccineType;
};

const setNumberOfVaccination = (numberOfVaccinationNum) => {
	if (Number.isInteger(numberOfVaccinationNum)) {
		return numberOfVaccinationNum + "回目";
	} else {
		return "回数不明";
	}
};

const setMaxTemperature = (maxTemperatureNum) => {
	let maxTemperature;
	switch (maxTemperatureNum) {
		case "1":
			maxTemperature = "36.9℃以下";
			break;
		case "2":
			maxTemperature = "37.0~37.4℃";
			break;
		case "3":
			maxTemperature = "37.5~37.9℃";
			break;
		case "4":
			maxTemperature = "38.0~38.4℃";
			break;
		case "5":
			maxTemperature = "38.5~38.9℃";
			break;
		case "6":
			maxTemperature = "39.0~39.4℃";
			break;
		case "7":
			maxTemperature = "39.5~39.9℃";
			break;
		case "8":
			maxTemperature = "40℃以上";
			break;
		case "10":
			maxTemperature = "発熱なしのため未検温";
			break;
		default:
			maxTemperature = "不明";
	}
	return maxTemperature;
};

const NotesViewListContentCard = (props) => {
	let note = props.note;

	return (
		<Grid.Column>
			<Segment raised>
				<Header as="h3">
					<Image src={setImage(note.gender)} />
					<Header.Content>
						{`${setGendar(note.gender)}/${setAge(note.age)}/${setVaccineType(
							note.vaccine_type
						)}/${setNumberOfVaccination(
							note.number_of_vaccination
						)}/${setMaxTemperature(note.max_temperature)}`}
					</Header.Content>
				</Header>
				<Header as="h4">経過レポート:</Header>
				<p>
					{note.log.split("\n").map((str, index) => (
						<React.Fragment key={index}>
							{str}
							<br />
						</React.Fragment>
					))}
				</p>
				<Header as="h4">コメント:</Header>
				{note.remarks.split("\n").map((str, index) => (
					<React.Fragment key={index}>
						{str}
						<br />
					</React.Fragment>
				))}
			</Segment>
		</Grid.Column>
	);
};

export default NotesViewListContentCard;
