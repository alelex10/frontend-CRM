"use client";
import React from "react";
import AsideBar, { ListMenuItem } from "./components/aside-bar/aside-bar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar } from "./components/app-bar/app-bar";
import LabelBottomNavigation from "./components/bottom-navigation/bottom-navigation";

import Container from "@mui/material/Container";
import { DrawerHeader } from "./components/aside-bar/drawer-header-aside-bar/drawer-header-aside-bar";
import { ContainerDesktop } from "../../components/container-responsive/container-desktop";
import { ContainerMovil } from "../../components/container-responsive/container-movil";
import ThemeRegistry from "../themes/theme-registry";

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
	return (
		<ThemeRegistry>
			<ContainerDesktop component="main" sx={{ minHeight: "100vh" }}>
				<AsideBar listMenuItems={LIST_MENU_ITEMS}>{children}</AsideBar>
			</ContainerDesktop>

			<ContainerMovil component="main" sx={{ minHeight: "100vh" }}>
				<AppBar open={false} />
				<DrawerHeader />
				{children}
				<LabelBottomNavigation />
			</ContainerMovil>
		</ThemeRegistry>
	);
};
export default DashboardLayout;
