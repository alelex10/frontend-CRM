import Link from "next/link";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MyDrawer } from "../drawer/mi-drawer";
import { Iconify } from "../icons/icon";

interface NavLink {
	label: string;
	href: string;
	value?: string | number;
}

interface NavBarProps {
	links?: NavLink[];}

export default function NavBar({ links }: NavBarProps) {
	const [openDrawer, setOpenDrawer] = React.useState(false);

	return (
		<Box>
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

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
						}}
					>
						{links?.map((link) => (
							<Button key={link.value} sx={{ my: 2, color: "white", display: "block" }}>
								{link.label}
							</Button>
						))}
					</Box>
					<Button sx={{ display: { xs: "none", md: "flex" } }} color="inherit">
						asd
						<Link href="dashboard">Iniciar Sesión</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
