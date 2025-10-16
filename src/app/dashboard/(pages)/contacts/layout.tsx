"use client";
import { useState } from "react";
import { DrawerAsideBar } from "../../components/aside-bar/drawer-aside-bar/drawer-aside-bar";
import { ListMenuItem } from "../../components/aside-bar/aside-bar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TabScrollNav from "../components/tab-scroll-nav/tab-scroll-nav";

const LIST_MENU_ITEMS_CONTACTS: ListMenuItem[] = [
	{
		label: "Contactos",
		href: "/dashboard/contacts",
		// icnono de tabla
		icon: "material-symbols:grid-on-outline",
	},
];
export default function LayoutCompani({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up("md"));
	console.log("isLarge", isLarge);
	return (
		<>
			<DrawerAsideBar
				hidden={!isLarge}
				variant="secondary"
				position="static"
				listIntems={LIST_MENU_ITEMS_CONTACTS}
				open={open}
				setOpen={setOpen}
			>
				{children}
			</DrawerAsideBar>
			<TabScrollNav hidden={isLarge}></TabScrollNav>
		</>
	);
}
