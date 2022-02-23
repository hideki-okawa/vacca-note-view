import React from "react";
import PostButton from "~/components/uiParts/post-button/index.js";

import { Grid, Label, Menu } from "semantic-ui-react";
import useMedia from "use-media";

const NotesViewListHeader = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	const pcContent = (
		<Grid>
			<Grid.Column width={8} verticalAlign="middle">
				<Menu attached="top" tabular>
					<Menu.Item
						name="ワクチン接種体験"
						active={props.activeItem === "ワクチン接種体験"}
						onClick={() => props.setActiveItem("ワクチン接種体験")}
					/>
					<Menu.Item
						name="統計情報"
						active={props.activeItem === "統計情報"}
						onClick={() => props.setActiveItem("統計情報")}
					/>
				</Menu>
			</Grid.Column>
			<Grid.Column textAlign="right" width={8} verticalAlign="middle">
				<PostButton setOpenFormModal={props.setOpenFormModal} />
			</Grid.Column>
		</Grid>
	);

	const smpContent = (
		<Menu attached="top" tabular>
			<Menu.Item
				name="ワクチン接種体験"
				active={props.activeItem === "ワクチン接種体験"}
				onClick={() => props.setActiveItem("ワクチン接種体験")}
			>
				ワクチン接種体験
				<Label circular color="teal" key="teal" size="tiny">
					{props.notesCount}件
				</Label>
			</Menu.Item>
			<Menu.Item
				name="統計情報"
				active={props.activeItem === "統計情報"}
				onClick={() => props.setActiveItem("統計情報")}
			/>
		</Menu>
	);

	return <header>{isWide ? pcContent : smpContent}</header>;
};

export default NotesViewListHeader;
