import React from "react";
import "./index.scss";

import useMedia from "use-media";

const PostButton = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	const pcHeader = <h2>接種体験を共有する &gt;</h2>;
	const smpHeader = <h3>接種体験を共有する &gt;</h3>;

	return (
		<a
			href="#!"
			className="post-button"
			onClick={() => {
				props.setOpenModal(true);
			}}
		>
			{isWide ? pcHeader : smpHeader}
		</a>
	);
};

export default PostButton;
