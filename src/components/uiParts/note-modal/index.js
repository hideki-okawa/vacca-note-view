// import React, { useState } from "react";
// import NoteModalForm from "~/components/uiParts/note-modal-orm/index.js";

// import { Modal } from "semantic-ui-react";
// import axios from "axios";

// const NoteModal = (props) => {
// 	// const [name, setName] = useState("");
// 	// const [gender, setGender] = useState("1");
// 	// const [age, setAge] = useState("1");
// 	// const [vaccineType, setVaccineType] = useState("M");
// 	// const [numberOfVaccination, setNumberOfVaccination] = useState(1);
// 	// const [maxTemperature, setMaxTemperature] = useState("1");
// 	// const [log, setLog] = useState("");
// 	// const [remarks, setRemarks] = useState("");
// 	// const [jwt, setJWT] = useState(localStorage.getItem("jwt"));

// 	// 体験の登録
// 	const createNote = () => {
// 		if (name === "") {
// 			setName("匿名");
// 		}

// 		const postData = {
// 			name: name,
// 			gender: gender,
// 			age: age,
// 			vaccine_type: vaccineType,
// 			number_of_vaccination: numberOfVaccination,
// 			max_temperature: maxTemperature,
// 			log: log,
// 			remarks: remarks,
// 			good_count: 0,
// 		};

// 		const api = process.env.REACT_APP_SERVER_API + "/note";
// 		const postRequest = async () => {
// 			let token;
// 			if (jwt == null) {
// 				const jwtAPI = process.env.REACT_APP_SERVER_API + "/auth";
// 				const response = await axios(jwtAPI);
// 				setJWT(response.data.token);
// 				token = response.data.token;
// 				window.localStorage.setItem("jwt", token);
// 			} else {
// 				token = jwt;
// 			}

// 			// TODO: レスポンスの内容でバリデーションする
// 			// const response = await axios.post(api, postData);
// 			await axios.post(api, postData, {
// 				headers: { Authorization: `Bearer ${token}` },
// 			});
// 		};
// 		postRequest();
// 	};

// 	return (
// 		<NoteForm
// 			name={name}
// 			setName={setName}
// 			age={age}
// 			setAge={setAge}
// 			gender={gender}
// 			setGender={setGender}
// 			vaccineType={vaccineType}
// 			setVaccineType={setVaccineType}
// 			setMaxTemperature={setMaxTemperature}
// 			numberOfVaccination={numberOfVaccination}
// 			setNumberOfVaccination={setNumberOfVaccination}
// 			log={log}
// 			setLog={setLog}
// 			remarks={remarks}
// 			setRemarks={setRemarks}
// 			setActiveForm={setActiveForm}
// 		/>
// 	);
// };

// export default NoteModal;
