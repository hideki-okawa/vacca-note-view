import React from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";

const App = () => {
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
