import React, { useState } from "react";
import ReturnOriginalNote from "~/common.js";

import { Button, Modal, Table, Header, Message } from "semantic-ui-react";
import axios from "axios";
import useMedia from "use-media";

const NoteCheckModal = (props) => {
	const isWide = useMedia({ minWidth: "767px" });
	const [isPostError, setIsPostError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));

	let note = {
		gender: props.gender,
		age: props.age,
		vaccine_type: props.vaccineType,
		number_of_vaccination: props.numberOfVaccination,
		max_temperature: props.maxTemperature,
		log: props.log,
		remarks: props.remarks,
	};

	let name;
	if (props.name === "") {
		name = "匿名";
	} else {
		name = props.name;
	}
	let originalNote = ReturnOriginalNote(note);

	// 体験の登録
	const createNote = () => {
		const postData = {
			name: name,
			gender: props.gender,
			age: props.age,
			vaccine_type: props.vaccineType,
			number_of_vaccination: props.numberOfVaccination,
			max_temperature: props.maxTemperature,
			log: props.log,
			remarks: props.remarks,
			good_count: 0,
		};

		const api = process.env.REACT_APP_SERVER_API + "/note";
		const postRequest = async () => {
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

			// TODO: レスポンスの内容でバリデーションする
			// const response = await axios.post(api, postData);
			await axios
				.post(api, postData, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then(function () {
					props.setOpenCheckModal(false);
					props.setOpenFormModal(false);
				})
				.catch(function (error) {
					setErrorMessage(error.response.data);
					setIsPostError(true);
				});
		};
		postRequest();
	};

	let errorMessageBox;
	if (isPostError) {
		errorMessageBox = (
			<Message error header="投稿に失敗しました。" content={errorMessage} />
		);
	} else {
		errorMessageBox = <></>;
	}

	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenCheckModal(false)}
			onOpen={() => props.setOpenCheckModal(true)}
			open={props.openCheckModal}
		>
			<Modal.Header>投稿内容をご確認ください</Modal.Header>
			<Modal.Content>
				<Table basic="very">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell width={3}>項目名</Table.HeaderCell>
							<Table.HeaderCell width={13}>入力内容</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="名前" />
							</Table.Cell>
							<Table.Cell>{name}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="性別" />
							</Table.Cell>
							<Table.Cell>{originalNote.gender}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="年齢" />
							</Table.Cell>
							<Table.Cell>{originalNote.age}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="ワクチンの種類" />
							</Table.Cell>
							<Table.Cell>{originalNote.vaccineType}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="接種回数" />
							</Table.Cell>
							<Table.Cell>{originalNote.numberOfVaccination}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="最高体温" />
							</Table.Cell>
							<Table.Cell>{originalNote.maxTemperature}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="経過記録" />
							</Table.Cell>
							<Table.Cell>{originalNote.log}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Header as={isWide ? "h4" : "h5"} content="自由コメント" />
							</Table.Cell>
							<Table.Cell>{originalNote.remarks}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				{/* <Message
					error
					header="投稿に失敗しました。"
					content="You can only sign up for an account once with a given e-mail address."
				/> */}
				{errorMessageBox}
			</Modal.Content>
			<Modal.Actions>
				<Button color="gray" onClick={() => props.setOpenCheckModal(false)}>
					キャンセル
				</Button>
				<Button
					content="接種体験を投稿する"
					labelPosition="right"
					icon="checkmark"
					onClick={() => {
						createNote();
					}}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
};

export default NoteCheckModal;
