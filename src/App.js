import React from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";
import Detail from "~/components/pages/detail/index.js";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="title-header">
					<Header />
				</div>
				<div className="main-content">
					<Route exact path="/" component={Top} />
					<Route path="/note/:id" component={Detail} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
