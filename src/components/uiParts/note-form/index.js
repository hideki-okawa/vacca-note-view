import React from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";

import { Button, Modal } from "semantic-ui-react";

const NoteForm = (props) => {
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
			<Modal.Content image>
				{/* <Image
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
				</Modal.Description> */}
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
