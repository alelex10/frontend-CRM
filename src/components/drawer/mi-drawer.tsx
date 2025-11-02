import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
			<List>
				{listData[0].map((text) => (
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
				{listData[1].map((text) => (
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
				sx={{
					zIndex: 100,
					width: "100%",
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						top: "10vh",
					},
				}}
				anchor="top"
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</>
	);
};
