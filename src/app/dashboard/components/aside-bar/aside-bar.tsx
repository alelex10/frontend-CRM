"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { Iconify } from "@/components/icons/icon";
import { Drawer } from "./drawer-aside-bar/drawer-styled";
import { DrawerHeader } from "./drawer-header-aside-bar/drawer-header-aside-bar";
import { ListItemButomAside, ListItemIconAside, ListItemTextAside } from "./list-menu-items/list-item-style";
import { AppBar, AppBarAnimated } from "../app-bar/app-bar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import { DrawerAsideBar } from "./drawer-aside-bar/drawer-aside-bar";

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

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />

			<AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<DrawerAsideBar listIntems={listMenuItems} open={open} setOpen={setOpen} />
			<Box>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
