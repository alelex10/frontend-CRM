"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./drawer-header-aside-bar/drawer-header-aside-bar";
import { AppBar} from "../app-bar/app-bar";
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

	console.log("----------------------ASIDE BAR-------------------")

	return (
		<Box hidden sx={{ display: "flex" }}>
			<CssBaseline />

			<AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<DrawerAsideBar listIntems={listMenuItems} open={open} setOpen={setOpen} />
			<Box sx={{ flexGrow: 1, p: 1 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
