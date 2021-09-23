import React from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Modal, Button } from "semantic-ui-react";

const NoteCheck = (props) => {
	return (
		<>
			<Modal.Header>
				<SubTitle title={"確認画面"} size={"h3"} />
			</Modal.Header>
			<Modal.Content></Modal.Content>
			<Modal.Actions>
				<Button color="gray" onClick={() => props.setOpenModal(false)}>
					キャンセル
				</Button>
				<Button
					content="接種体験を投稿する"
					labelPosition="right"
					icon="checkmark"
					onClick={() => {
						// createNote();
						// props.setOpenModal(false);
						// props.setActiveForm(false);
					}}
					positive
				/>
			</Modal.Actions>
		</>
	);
};

export default NoteCheck;
