import React, { useState } from "react";
import NoteForm from "~/components/uiParts/note-form/index.js";
import TopView from "~/components/uiParts/top-view/index.js";
import NotesView from "~/components/uiParts/notes-view/index.js";

const Top = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<NoteForm openModal={openModal} setOpenModal={setOpenModal} />
			<TopView setOpenModal={setOpenModal} />
			<NotesView setOpenModal={setOpenModal} />
		</div>
	);
};

export default Top;
