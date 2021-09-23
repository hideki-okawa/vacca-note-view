import React, { useState } from "react";
import ReturnOriginalNote from "~/common.js";

import { Button, Modal } from "semantic-ui-react";
import axios from "axios";

const NoteCheckModal = (props) => {
	let note = {
		gender: props.gender,
		age: props.age,
		vaccine_type: props.vaccineType,
		number_of_vaccination: props.numberOfVaccination,
		max_temperature: props.maxTemperature,
		log: props.log,
		remarks: props.remarks,
	};

	let originalNote = ReturnOriginalNote(note);

	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenCheckModal(false)}
			onOpen={() => props.setOpenCheckModal(true)}
			open={props.openCheckModal}
		>
			<Modal.Header>投稿内容をご確認ください</Modal.Header>
			<Modal.Content>{originalNote.age}</Modal.Content>
			<Modal.Actions>
				<Button color="gray" onClick={() => props.setOpenFormModal(false)}>
					キャンセル
				</Button>
				<Button
					content="接種体験を投稿する"
					labelPosition="right"
					icon="checkmark"
					onClick={() => {
						// createNote();
						// props.setOpenFormModal(false);
					}}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
};

export default NoteCheckModal;
