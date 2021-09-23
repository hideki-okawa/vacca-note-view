import React, { useState } from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const NoteCheckModal = (props) => {
	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenFormModal(false)}
			onOpen={() => props.setOpenFormModal(true)}
			open={props.openFormModal}
		>
			<Modal.Header>
				<SubTitle title={"ワクチン接種体験を共有する"} size={"h3"} />
			</Modal.Header>
			<Modal.Content></Modal.Content>
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
