import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";

interface NavLink {
	label: string;
	href: string;
	value?: string | number;
}

interface NavBarProps {
	links?: NavLink[];
	iconHamburger?: string;
	enabledDrawer?: boolean;
}

export default function NavBar({ links, iconHamburger, enabledDrawer = true }: NavBarProps) {
	const [value, setValue] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<AppBar position="sticky" color="default" elevation={2} sx={{ height: "10vh", backgroundColor: "white" }}></AppBar>
	);
}
