import React from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Button, Modal } from "semantic-ui-react";

const NoteModal = (props) => {
	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenModal(false)}
			onOpen={() => props.setOpenModal(true)}
			open={props.openModal}
		>
			<Modal.Header>
				<SubTitle title={"ワクチン接種体験を共有する"} size={"h3"} />
			</Modal.Header>
			<Modal.Content image></Modal.Content>
			<Modal.Actions>
				<Button color="black" onClick={() => props.setOpenModal(false)}>
					Nope
				</Button>
				<Button
					content="Yep, that's me"
					labelPosition="right"
					icon="checkmark"
					onClick={() => props.setOpenModal(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
};

export default NoteModal;
