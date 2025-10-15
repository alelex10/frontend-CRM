import { Dispatch, SetStateAction, useState } from "react";
import { Drawer } from "./drawer-styled";
import { DrawerHeader } from "../drawer-header-aside-bar/drawer-header-aside-bar";
import IconButton from "@mui/material/IconButton";
import { Iconify } from "../../../../../components/icons/icon";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { LIST_MENU_ITEMS } from "../../../layout";
import ListItem from "@mui/material/ListItem";
import { ListItemButomAside, ListItemIconAside, ListItemTextAside } from "../list-menu-items/list-item-style";
import { ListMenuItem } from "../aside-bar";
import Box from "@mui/material/Box";

interface DrawerProps {
	children?: React.ReactNode;
	position?: "fixed" | "absolute" | "static" | "sticky";
	listIntems?: ListMenuItem[];
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DrawerAsideBar = ({ children, position = "fixed", listIntems, open, setOpen }: DrawerProps) => {
	const handleDrawerClose = () => setOpen(false);
	const handleDrawerOpen = () => setOpen(true);

	const isSticky = position === "sticky";
	return (
		<>
			<Drawer
				variant="permanent"
				open={open}
				sx={{
					"& .MuiDrawer-paper": {
						minHeight: "100%",
						position: position,
					},
				}}
			>
				<DrawerHeader sx={{ minHeight: { sm: isSticky ? "32px" : "64px" } }}>
					<IconButton sx={{ padding: "0 8px" }} color="inherit" onClick={open ? handleDrawerClose : handleDrawerOpen}>
						<Iconify icon="material-symbols:menu-open" />
					</IconButton>
				</DrawerHeader>
				{position === "fixed" && <Divider />}
				<List>
					{listIntems?.map((item) => (
						<ListItem key={item.label} disablePadding sx={{ display: "block" }}>
							<ListItemButomAside href={item.href} open={open}>
								<ListItemIconAside open={open}>
									{item.icon && <Iconify icon={item.icon} color="inherit" />}
								</ListItemIconAside>
								<ListItemTextAside primary={item.label} open={open} />
							</ListItemButomAside>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Box sx={{ flexGrow: 1, height: "100%", position: "relative", overflow: "auto" }}>

				{children}
			</Box>
		</>
	);
};

