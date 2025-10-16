"use client";
import { useState } from "react";
import { DrawerAsideBar } from "../../components/aside-bar/drawer-aside-bar/drawer-aside-bar";
import { ListMenuItem } from "../../components/aside-bar/aside-bar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const LIST_MENU_ITEMS_COMPANIS: ListMenuItem[] = [
	{
		label: "Companis",
		href: "/dashboard/companis",
		icon: "material-symbols:grid-on-outline",
	},
];

export default function LayoutCompani({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<>
			<DrawerAsideBar
				hidden={!isLarge}
				variant="secondary"
				position="static"
				listIntems={LIST_MENU_ITEMS_COMPANIS}
				open={open}
				setOpen={setOpen}
			>
				{children}
			</DrawerAsideBar>
		</>
	);
}
