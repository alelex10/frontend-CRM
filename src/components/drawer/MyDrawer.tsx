import {
	Box,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { NavBar } from "../navbar/NavBar";

interface Props {
	open: boolean;
	toggleDrawer: Dispatch<SetStateAction<boolean>>;
}

export const MyDrawer = ({ open, toggleDrawer }: Props) => {
	const listData = [
		["Inbox", "Starred", "Send email", "Drafts"],
		["All mail", "Trash", "Spam"],
	];

	const list = () => (
		<Box role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
			<NavBar enabledDrawer={false} iconHamburger="line-md:menu-to-close-transition" />
			<List>
				{listData[0].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{listData[1].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Drawer
				sx={{ zIndex: 100, bottom: "10vh", position: "relative", transform: "none"}}
				anchor="top"
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</>
	);
};


