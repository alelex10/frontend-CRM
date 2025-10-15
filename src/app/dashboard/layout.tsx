"use client";
import React from "react";
import AsideBar, { ListMenuItem } from "./components/aside-bar/aside-bar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar } from "./components/app-bar/app-bar";
import LabelBottomNavigation from "./components/bottom-navigation/bottom-navigation";

import { DrawerAsideBar } from "./components/aside-bar/drawer-aside-bar/drawer-aside-bar";
import Container from "@mui/material/Container";

interface Props {
	children?: React.ReactNode;
}

export const LIST_MENU_ITEMS: ListMenuItem[] = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: "material-symbols:dashboard-outline-rounded",
	},
	{
		label: "Contactos",
		href: "/dashboard/contacts",
		icon: "material-symbols:contacts",
	},
	{
		label: "Compañias",
		href: "/dashboard/companis",
		icon: "material-symbols:business-center",
	},
];

const DashboardLayout = ({ children }: Props) => {
	const [open, setOpen] = React.useState(false);

	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<>
			<Container maxWidth={false} disableGutters component="main" sx={{ minHeight: "100vh" }}>
				{isLarge ? (
					<AsideBar listMenuItems={LIST_MENU_ITEMS}>{children}</AsideBar>
				) : (
					<>
						<AppBar open={false} />
						{children}
						<LabelBottomNavigation />
					</>
				)}
			</Container>
		</>
	);
};
export default DashboardLayout;
