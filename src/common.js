import React from "react";
import * as constants from "~/constants.js";

const ReturnOriginalNote = (note) => {
	let originalNote = {};

	if (note.gender) {
		constants.GENDER_TYPE[note.gender]
			? (originalNote.gender = constants.GENDER_TYPE[note.gender])
			: (originalNote.gender = "不明");
	} else {
		originalNote.gender = "不明";
	}

	if (note.age) {
		constants.AGE_TYPE[note.age]
			? (originalNote.age = constants.AGE_TYPE[note.age])
			: (originalNote.age = "不明");
	} else {
		originalNote.age = "不明";
	}

	if (note.number_of_vaccination) {
		constants.NUMBER_OF_VACCINATION[note.number_of_vaccination]
			? (originalNote.numberOfVaccination =
					constants.NUMBER_OF_VACCINATION[note.number_of_vaccination])
			: (originalNote.numberOfVaccination = "不明");
	} else {
		originalNote.numberOfVaccination = "不明";
	}

	if (note.vaccine_type) {
		constants.VACCINE_TYPE[note.vaccine_type]
			? (originalNote.vaccineType = constants.VACCINE_TYPE[note.vaccine_type])
			: (originalNote.vaccineType = "不明");
	} else {
		originalNote.vaccineType = "不明";
	}

	if (note.second_vaccine_type) {
		if (note.number_of_vaccination === 3) {
			constants.VACCINE_TYPE[note.second_vaccine_type]
				? (originalNote.secondVaccineType =
						constants.VACCINE_TYPE[note.second_vaccine_type])
				: (originalNote.secondVaccineType = "不明");
		} else {
			originalNote.secondVaccineType = "-";
		}
	} else {
		originalNote.secondVaccineType = "不明";
	}
	console.log("---");
	console.log("note", note);
	console.log("originalNote", originalNote);

	if (note.max_temperature) {
		constants.MAX_TEMPERATURE[note.max_temperature]
			? (originalNote.maxTemperature =
					constants.MAX_TEMPERATURE[note.max_temperature])
			: (originalNote.maxTemperature = "不明");
	} else {
		originalNote.maxTemperature = "不明";
	}

	if (note.log !== undefined) {
		originalNote.log = note.log.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	if (note.remarks !== undefined) {
		originalNote.remarks = note.remarks.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	return originalNote;
};

export default ReturnOriginalNote;
