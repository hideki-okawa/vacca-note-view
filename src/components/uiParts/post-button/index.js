import React from "react";
import "./index.scss";

const PostButton = (props) => {
	return (
		<a
			href="#!"
			className="post-button"
			onClick={() => {
				props.setOpenModal(true);
			}}
		>
			<h2>接種体験を共有する &gt;</h2>
		</a>
	);
};

export default PostButton;
