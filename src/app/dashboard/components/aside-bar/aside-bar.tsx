"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { Iconify } from "@/components/icons/icon";
import { Drawer } from "./drawer-aside-bar/drawer-aside-bar";
import { DrawerHeader } from "./drawer-header-aside-bar/drawer-header-aside-bar";
import { ListItemButomAside, ListItemIconAside, ListItemTextAside } from "./list-menu-items/list-item-style";
import { AppBar, AppBarAnimated } from "../app-bar/app-bar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";

export interface ListMenuItem {
	label: string;
	href: string;
	icon?: string;
}

interface DrawerProps {
	children?: React.ReactNode;
	listMenuItems?: ListMenuItem[];
}

export default function AsideBar({ children, listMenuItems }: DrawerProps) {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />

			<AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton color="inherit" onClick={handleDrawerClose}>
						<Iconify icon="material-symbols:menu-open" />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{listMenuItems?.map((item) => (
						// <Link href={item.href} key={item.label}>
						<ListItem key={item.label} disablePadding sx={{ display: "block" }}>
							<ListItemButomAside href={item.href} open={open}>
								<ListItemIconAside open={open}>
									{item.icon && <Iconify icon={item.icon} color="inherit" />}
								</ListItemIconAside>
								<ListItemTextAside primary={item.label} open={open} />
							</ListItemButomAside>
						</ListItem>
						// </Link>
					))}
				</List>
				<Divider />
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
