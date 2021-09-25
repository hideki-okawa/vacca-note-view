import React from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";
import Detail from "~/components/pages/detail/index.js";

import { BrowserRouter, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

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
				<Button
					className="angle-up"
					circular
					basic
					icon="angle up"
					color="grey"
					onClick={() => window.scrollTo(0, 0)}
				/>
			</div>
		</BrowserRouter>
	);
};

export default App;
