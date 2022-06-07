import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Maintenance from "./Maintenance";

import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <App /> */}
			<Maintenance />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
