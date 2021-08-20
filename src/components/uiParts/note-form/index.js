import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const NoteForm = (props) => {
	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenModal(false)}
			onOpen={() => props.setOpenModal(true)}
			open={props.openModal}
		>
			<Modal.Header>Select a Photo</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
					wrapped
				/>
				<Modal.Description>
					<Header>Default Profile Image</Header>
					<p>
						We've found the following gravatar image associated with your e-mail
						address.
					</p>
					<p>Is it okay to use this photo?</p>
				</Modal.Description>
			</Modal.Content>
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

export default NoteForm;
