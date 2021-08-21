import React, { useState } from "react";
import NoteModal from "~/components/uiParts/note-modal/index.js";
import TopView from "~/components/uiParts/top-view/index.js";
import NotesView from "~/components/uiParts/notes-view/index.js";

const Top = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<NoteModal openModal={openModal} setOpenModal={setOpenModal} />
			<TopView setOpenModal={setOpenModal} />
			<NotesView setOpenModal={setOpenModal} />
		</div>
	);
};

export default Top;
