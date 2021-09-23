import React, { useState } from "react";
import NoteFormModal from "~/components/uiParts/note-form-modal/index.js";
import TopView from "~/components/uiParts/top-view/index.js";
import NotesView from "~/components/uiParts/notes-view/index.js";

const Top = () => {
	const [openFormModal, setOpenFormModal] = useState(false);
	const [openCheckModal, setOpenCheckModal] = useState(false);

	return (
		<div>
			<NoteFormModal
				openFormModal={openFormModal}
				setOpenFormModal={setOpenFormModal}
				openCheckModal={openCheckModal}
				setOpenCheckModal={setOpenCheckModal}
			/>
			<TopView setOpenFormModal={setOpenFormModal} />
			<NotesView setOpenFormModal={setOpenFormModal} />
		</div>
	);
};

export default Top;
