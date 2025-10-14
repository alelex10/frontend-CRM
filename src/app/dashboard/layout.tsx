"use client";
import React from "react";
import AsideBar, { ListMenuItem } from "./components/aside-bar/aside-bar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar } from "./components/app-bar/app-bar";
import BottomNavigation from "@mui/material/BottomNavigation";
import LabelBottomNavigation from "./components/bottom-navigation/bottom-navigation";
import ThemeRegistry from "../theme-registry";

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
		href: "dashboard/contatos",
		icon: "material-symbols:contacts",
	},
	{
		label: "Compañias",
		href: "dashboard/companias",
		icon: "material-symbols:business-center",
	},
];

const DashboardLayout = ({ children }: Props) => {
	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
	if (isLarge) {
		return <AsideBar listMenuItems={LIST_MENU_ITEMS}>{children}</AsideBar>;
	}
	return (
		<>
			{/* <ThemeRegistry> */}
			<AppBar open={false} />
			{children}
			<LabelBottomNavigation />
			{/* </ThemeRegistry> */}
		</>
	);
};
export default DashboardLayout;
