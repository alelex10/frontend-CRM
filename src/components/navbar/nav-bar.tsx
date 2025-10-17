"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MyDrawer } from "../drawer/mi-drawer";
import { Iconify } from "../icons/icon";
import MenuTab from "./menu-tab/menu-tab";

export interface NavLink {
	label: string;
	href: string;
	value?: string | number;
}

interface NavBarProps {
	links?: NavLink[];
}

export default function NavBar({ links }: NavBarProps) {
	const [openDrawer, setOpenDrawer] = React.useState(false);

	return (
		<Box component={"nav"}>
			<AppBar position="fixed">
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						height: "10vh",
					}}
				>
					<Typography variant="h6" component="div">
						OpbitCRM
					</Typography>
					{/* drawer */}
					<MyDrawer open={openDrawer} toggleDrawer={setOpenDrawer} />
					<IconButton
						onClick={() => setOpenDrawer(!openDrawer)}
						size="large"
						color="inherit"
						sx={{ display: { xs: "block", md: "none" } }}
					>
						<Iconify icon="line-md:close-to-menu-transition" />
					</IconButton>
					<MenuTab links={links} />
					<Button variant="outlined" href="/dashboard" sx={{ display: { xs: "none", md: "flex" } }} color="inherit">
						Iniciar Sesión
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
