import React from "react";
import "./App.scss";
import Header from "~/components/uiParts/header/index.js";
import Top from "~/components/pages/top/index.js";
import Detail from "~/components/pages/detail/index.js";
import Service from "~/components/pages/service/index.js";
import Privacy from "~/components/pages/privacy/index.js";
import Contact from "~/components/pages/contact/index.js";
import NotFound from "~/components/pages/not-found/index.js";
import Footer from "~/components/uiParts/footer/index.js";
import ScrollToTop from "~/ScrollToTop.js";
import { useTracking } from "~/useTracking.ts";

import { Route, Switch } from "react-router-dom";
import { Button } from "semantic-ui-react";

const App = () => {
	useTracking("UA-208567040-1");

	return (
		<div className="App">
			<ScrollToTop />
			<div className="title-header">
				<Header />
			</div>
			<div className="main-content">
				<Switch>
					<Route exact path="/" component={Top} />
					<Route path="/note/:id" component={Detail} />
					<Route path="/terms/service" component={Service} />
					<Route path="/terms/privacy" component={Privacy} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</div>
			<Button
				className="angle-up"
				circular
				basic
				icon="angle up"
				color="grey"
				onClick={() => window.scrollTo(0, 0)}
			/>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default App;
