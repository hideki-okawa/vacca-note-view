import React from "react";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";
import SeeNextButton from "~/components/uiParts/see-next-button/index.js";
import * as constants from "~/constants.js";

import { Header, Image, Card } from "semantic-ui-react";

const setGender = (genderNum) => {
	if (constants.GENDER_TYPE[genderNum]) {
		return constants.GENDER_TYPE[genderNum];
	} else {
		return "性別不明";
	}
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
	if (constants.AGE_TYPE[ageNum]) {
		return constants.AGE_TYPE[ageNum];
	} else {
		return "年齢不明";
	}
};

const setVaccineType = (vaccineTypeSymbol) => {
	if (constants.VACCINE_TYPE[vaccineTypeSymbol]) {
		return constants.VACCINE_TYPE[vaccineTypeSymbol];
	} else {
		return "ワクチン種不明";
	}
};

const setNumberOfVaccination = (numberOfVaccinationNum) => {
	if (constants.NUMBER_OF_VACCINATION[numberOfVaccinationNum]) {
		return constants.NUMBER_OF_VACCINATION[numberOfVaccinationNum];
	} else {
		return "回数不明";
	}
};

const setMaxTemperature = (maxTemperatureNum) => {
	if (constants.MAX_TEMPERATURE[maxTemperatureNum]) {
		return constants.MAX_TEMPERATURE[maxTemperatureNum];
	} else {
		return "最高体温不明";
	}
};

const NotesViewListContentCard = (props) => {
	let note = props.note;

	return (
		<Card raised>
			<Card.Content>
				<Header as="h3">
					<Image src={setImage(note.gender)} />
					<Header.Content>
						{`${setAge(note.age)}${setGender(note.gender)}の接種体験`}
					</Header.Content>
				</Header>
				<Header as="h4">回答者:</Header>
				<p>
					{`${setGender(note.gender)}/${setAge(note.age)}/${setVaccineType(
						note.vaccine_type
					)}/${setNumberOfVaccination(
						note.number_of_vaccination
					)}/${setMaxTemperature(note.max_temperature)}`}
				</p>
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
				<SeeNextButton ID={note.id} />
			</Card.Content>
		</Card>
	);
};

export default NotesViewListContentCard;
