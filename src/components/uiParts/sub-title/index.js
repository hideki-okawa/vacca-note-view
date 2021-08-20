import React from "react";
import "./index.scss";

const SubTitle = (props) => {
	if (props.size === "h2") {
		return <h2 className="sub-title">{props.title}</h2>;
	} else if (props.size === "h3") {
		return <h3 className="sub-title">{props.title}</h3>;
	} else {
		return <h1 className="sub-title">{props.title}</h1>;
	}
};

export default SubTitle;
