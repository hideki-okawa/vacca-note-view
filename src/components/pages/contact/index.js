import React from "react";
import "./index.scss";

import { Header } from "semantic-ui-react";
import useMedia from "use-media";

const Contact = () => {
	const isWide = useMedia({ minWidth: "767px" });

	return (
		<div className={isWide ? "contact-pc" : "contact-smp"}>
			<Header as="h1">お問合せ先</Header>
			投稿の削除依頼などの問い合わせは、以下のtwitterアカウントにDMをお願いいたいします。
			<br />
			<a
				href="https://twitter.com/Okend1033"
				target="_blank"
				rel="noopener noreferrer"
			>
				@Okend1033
			</a>
		</div>
	);
};

export default Contact;
