import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";

import axios from "axios";

const App = () => {
	const [comment, setComment] = useState("");

	useEffect(() => {
		const api = process.env.REACT_APP_SERVER_API;
		const fetchData = async () => {
			const response = await axios(api);
			setComment(response.data);
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<div className="title-header">
				<Header />
			</div>
			<div className="main-content">
				<Top />
			</div>
		</div>
	);
};

export default App;
