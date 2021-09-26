import React, { useState } from "react";
import "./index.scss";
// import NotesViewFilter from "~/components/uiParts/notes-view-filter/index.js";
import NotesViewList from "~/components/uiParts/notes-view-list/index.js";
import NotesViewCount from "~/components/uiParts/notes-view-count/index.js";

import { Grid, Message } from "semantic-ui-react";
import useMedia from "use-media";

const NotesView = (props) => {
	const [notesCount, setNotesCount] = useState(0);
	const isWide = useMedia({ minWidth: "767px" });

	const warningMessage = (
		<Message>
			<p>
				新型コロナウイルス感染症やコロナワクチンについては、必ず1次情報として
				<a
					href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					厚生労働省
				</a>
				などの公的機関が公開している情報をご確認ください。
			</p>
		</Message>
	);

	const pcContent = (
		<Grid centered>
			<Grid.Column textAlign width={4}>
				<NotesViewCount notesCount={notesCount} />
				{/* <NotesViewFilter /> */}
			</Grid.Column>
			<Grid.Column width={12}>
				{warningMessage}
				<NotesViewList
					openFormModal={props.openFormModal}
					setOpenFormModal={props.setOpenFormModal}
					setNotesCount={setNotesCount}
				/>
			</Grid.Column>
		</Grid>
	);

	const smpContent = (
		<>
			{warningMessage}
			<NotesViewList
				setOpenFormModal={props.setOpenFormModal}
				setNotesCount={setNotesCount}
				notesCount={notesCount}
			/>
		</>
	);

	return <div className="notes-view">{isWide ? pcContent : smpContent}</div>;
};

export default NotesView;
