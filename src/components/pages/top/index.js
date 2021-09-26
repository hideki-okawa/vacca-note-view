import React, { useState } from "react";
import NoteFormModal from "~/components/uiParts/note-form-modal/index.js";
import NoteThanksModal from "~/components/uiParts/note-thanks-modal/index.js";
import TopView from "~/components/uiParts/top-view/index.js";
import NotesView from "~/components/uiParts/notes-view/index.js";

const Top = () => {
	const [openFormModal, setOpenFormModal] = useState(false);
	const [openCheckModal, setOpenCheckModal] = useState(false);
	const [openThanksModal, setOpenThanksModal] = useState(false);
	const [postNoteNum, setPostNoteNum] = useState();

	return (
		<div>
			<NoteFormModal
				openFormModal={openFormModal}
				setOpenFormModal={setOpenFormModal}
				openCheckModal={openCheckModal}
				setOpenCheckModal={setOpenCheckModal}
				setOpenThanksModal={setOpenThanksModal}
				setPostNoteNum={setPostNoteNum}
			/>
			<NoteThanksModal
				openThanksModal={openThanksModal}
				setOpenThanksModal={setOpenThanksModal}
				postNoteNum={postNoteNum}
			/>
			<TopView setOpenFormModal={setOpenFormModal} />
			<NotesView
				openFormModal={openFormModal}
				setOpenFormModal={setOpenFormModal}
			/>
		</div>
	);
};

export default Top;
