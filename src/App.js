import React from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";
import Detail from "~/components/pages/detail/index.js";
import Service from "~/components/pages/service/index.js";
import Privacy from "~/components/pages/privacy/index.js";
import { useTracking } from "~/useTracking.ts";

import { Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

const App = () => {
	useTracking("UA-208567040-1");

	return (
		<div className="App">
			<div className="title-header">
				<Header />
			</div>
			<div className="main-content">
				<Route exact path="/" component={Top} />
				<Route path="/note/:id" component={Detail} />
				<Route path="/terms/service" component={Service} />
				<Route path="/terms/privacy" component={Privacy} />
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
	);
};

export default App;
