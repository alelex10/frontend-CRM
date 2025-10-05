import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Iconify } from "../icons/Icon";

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
	const [value, setValue] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar >
					<Typography variant="h6" component="div">
						OpbitCRM
					</Typography>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<Iconify icon="line-md:close-to-menu-transition" width="24" height="24" />
					</IconButton>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{links?.map((link) => (
							<Button key={link.value} sx={{ my: 2, color: "white", display: "block" }}>
								{link.label}
							</Button>
						))}
					</Box>

					<Button color="inherit">Registrarse</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
