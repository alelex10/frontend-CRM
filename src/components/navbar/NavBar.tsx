import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Iconify } from "../icons/Icon";
import { MyDrawer } from "../drawer/MyDrawer";

interface NavLink {
	label: string;
	href: string;
	value?: string | number;
}

interface NavBarProps {
	links?: NavLink[];
	enabledDrawer?: boolean;
}

export default function NavBar({ links, enabledDrawer = true }: NavBarProps) {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" >
				<Toolbar sx={{ display: "flex", justifyContent: "space-between", height: "10vh" }}>
					<Typography variant="h6" component="div">
						OpbitCRM 
					</Typography>
					<MyDrawer open={openDrawer} toggleDrawer={setOpenDrawer} />
					<IconButton size="large" color="inherit" sx={{ display: { xs: "block", md: "none" } }}>
						<Iconify onClick={() => setOpenDrawer(!openDrawer)} icon="line-md:close-to-menu-transition" />
					</IconButton>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
						{links?.map((link) => (
							<Button key={link.value} sx={{ my: 2, color: "white", display: "block" }}>
								{link.label}
							</Button>
						))}
					</Box>
					<Button sx={{  display: { xs: "none", md: "flex"} }} color="inherit">Registrarse</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
