import React from "react";
// import "./index.scss";

import { Segment, Container, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useMedia from "use-media";

const Footer = () => {
	return (
		<Segment
			inverted
			style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
			vertical
		>
			<Container textAlign="center">
				<List horizontal inverted divided link size="small">
					<List.Item>
						<Link to={"/contact"}>お問い合わせ</Link>
					</List.Item>
					<List.Item>
						<Link to={"/terms/service"}>利用規約</Link>
					</List.Item>
					<List.Item>
						<Link to={"/terms/privacy"}>プライバシーポリシー</Link>
					</List.Item>
				</List>
				<p>
					Copyright © 2021
					<a
						href="https://twitter.com/Okend1033"
						target="_blank"
						rel="noopener noreferrer"
					>
						@Okend1033
					</a>
				</p>
			</Container>
		</Segment>
	);
};

export default Footer;
