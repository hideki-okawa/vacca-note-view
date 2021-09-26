import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";
import useMedia from "use-media";

const NotFound = () => {
	const isWide = useMedia({ minWidth: "767px" });

	return (
		<div className={isWide ? "not-found-pc" : "not-found-smp"}>
			<Header as="h1">存在しないページです。</Header>
		</div>
	);
};

export default NotFound;
