import React, { useState, useEffect } from "react";
import NotesChart from "~/components/uiParts/notes-chart/index.js";

import { Card, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";
import useMedia from "use-media";

const NotesCharts = (props) => {
	const [temperatureList, setTemperatureList] = useState([]);
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));
	const [loading, setLoading] = useState(true);
	const isWide = useMedia({ minWidth: "767px" });

	useEffect(() => {
		const fetchData = async () => {
			let token;
			if (jwt == null) {
				const jwtAPI = process.env.REACT_APP_SERVER_API + "/auth";
				const response = await axios(jwtAPI);
				setJWT(response.data.token);
				token = response.data.token;
				window.localStorage.setItem("jwt", token);
			} else {
				token = jwt;
			}

			const api =
				process.env.REACT_APP_SERVER_API + "/notes/analysis/temperature";
			const response = await axios.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setTemperatureList(response.data);
			setLoading(false);
		};
		fetchData();
	}, []);

	let loader = (
		<Dimmer active inverted>
			<Loader>Loading</Loader>
		</Dimmer>
	);

	let loadingComponent;
	if (loading) {
		loadingComponent = loader;
	} else {
		loadingComponent = null;
	}

	return (
		<>
			{loadingComponent}
			<Card.Group itemsPerRow={isWide ? 2 : 1}>
				{temperatureList.map((temperatureData) => {
					return (
						<NotesChart
							title={temperatureData.name}
							temperatureDataList={temperatureData.list}
						/>
					);
				})}
			</Card.Group>
		</>
	);
};

export default NotesCharts;
