// import React, { useState } from "react";

// import { Form } from "semantic-ui-react";

// const NoteForm = (props) => {
// 	const [nameError, setNameError] = useState(false);

// 	const handleChangeName = (e) => {
// 		if (e.target.value === "") {
// 			setNameError("名前を入力してください。");
// 		} else {
// 			setNameError(false);
// 		}
// 		props.setName(e.target.value);
// 	};

// 	return (
// 		<Form>
// 			<Form.Field>
// 				<label>名前</label>
// 				<Form.Input
// 					error={nameError}
// 					placeholder="未入力の場合は「匿名」になります。"
// 					value={props.name}
// 					onChange={handleChangeName}
// 				/>
// 			</Form.Field>
// 			<Form.Button content="Submit" />
// 		</Form>
// 	);
// };

// export default NoteForm;
