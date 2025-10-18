"use client";
import { useState } from "react";
import { DrawerAsideBar } from "../../components/aside-bar/drawer-aside-bar/drawer-aside-bar";
import { ListMenuItem } from "../../components/aside-bar/aside-bar";
import TabScrollNav from "../components/tab-scroll-nav/tab-scroll-nav";
import { ContainerDesktop } from "../../../../components/container-responsive/container-desktop";
import { ContainerMovil } from "../../../../components/container-responsive/container-movil";

const LIST_MENU_ITEMS_CONTACTS: ListMenuItem[] = [
	{
		label: "Contactos",
		href: "/dashboard/contacts/table",
		icon: "material-symbols:grid-on-outline",
	},
];
export default function LayoutCompani({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(true);
	return (
		<>
			<ContainerDesktop>
				<DrawerAsideBar
					variant="secondary"
					position="static"
					listIntems={LIST_MENU_ITEMS_CONTACTS}
					open={open}
					setOpen={setOpen}
				>
					{children}
				</DrawerAsideBar>
			</ContainerDesktop>
			<ContainerMovil>
				<TabScrollNav></TabScrollNav>
			</ContainerMovil>
		</>
	);
}
