import React, { useState } from "react";
import "./index.scss";
import thanks from "~/img/vacca-note-thanks.png";

import { Button, Modal, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TwitterShareButton, TwitterIcon } from "react-share";
import useMedia from "use-media";

const NoteCheckModal = (props) => {
	const isWide = useMedia({ minWidth: "767px" });

	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenThanksModal(false)}
			onOpen={() => props.setOpenThanksModal(true)}
			open={props.openThanksModal}
		>
			<Modal.Content>
				<div className="note-thanks-modal-content">
					<Image
						src={thanks}
						className="note-thanks-modal-image"
						alt="thanks-image"
					/>
					<Header
						as={isWide ? "h1" : "h3"}
						content="投稿ありがとうございます！！"
					/>
					<p>
						投稿した接種体験は
						<Link
							to={`/note/${props.postNoteNum}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							こちら
						</Link>
						です。
					</p>
					<TwitterShareButton
						url={[`https://vacca-note.com/note/${props.postNoteNum}`]}
						title={["ワクチンの接種体験を投稿しました！"]}
					>
						<TwitterIcon size={32} round />
					</TwitterShareButton>
				</div>
			</Modal.Content>
			<Modal.Actions>
				<Button color="gray" onClick={() => props.setOpenThanksModal(false)}>
					閉じる
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default NoteCheckModal;
