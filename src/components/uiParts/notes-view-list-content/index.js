import React from "react";
import "./index.scss";
import man from "~/img/user-man.png";
import woman from "~/img/user-woman.png";

import { Grid, Segment, Header, Image } from "semantic-ui-react";

const NotesViewListContent = () => {
	return (
		<Grid columns={2} stackable>
			<Grid.Column>
				<Segment raised>
					<Header as="h3">
						<Image src={man} />
						<Header.Content>男性/20代/ファイザー/1回目/36.5℃</Header.Content>
					</Header>
					<p className="note-paragraph">
						2021/08/06 11:25 接種
						<br /> 13:08 左腕に若干の痺れを感じる
						<br /> 14:08 左腕が少し上がらなくなってきた
						<br /> 18:39 左腕が肩より上に上がらない
						<br />
						20:26 37.3
						<br />
						2021/08/07 4:14 36.5 全身に痛みを感じる 頭痛あり
						<br />
						6:15 36.6 全体的に痛みが引く
					</p>
				</Segment>
			</Grid.Column>
		</Grid>
	);
};

export default NotesViewListContent;
