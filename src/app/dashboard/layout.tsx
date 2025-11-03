
import React from "react";
import AsideBar, { ListMenuItem } from "./components/aside-bar/aside-bar";
import { ContainerDesktop } from "../../components/container-responsive/container-desktop";
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
		href: "/dashboard/contacts/table",
		icon: "material-symbols:contacts",
	},
	{
		label: "Compañias",
		href: "/dashboard/companis/table",
		icon: "material-symbols:business-center",
	},
	{
		label: "Oportunidades",
		href: "/dashboard/opportunities/pipeline",
		icon: "material-symbols:handshake",
	},
];

const DashboardLayout = ({ children }: Props) => {
	return (<>
		<ThemeRegistry>
			<ContainerDesktop component="main" sx={{ minHeight: "100vh" }}>
				<AsideBar listMenuItems={LIST_MENU_ITEMS}>{children}</AsideBar>
			</ContainerDesktop>

			{/* SE PRIORIZA LA VISTA DE DESKTOP */}

			{/* <ContainerMovil component="main" sx={{ minHeight: "100vh" }}>
				<AppBar open={false} />
				<DrawerHeader />
				{children}
				<LabelBottomNavigation />
			</ContainerMovil> */}
		</ThemeRegistry>
	</>);
};
export default DashboardLayout;
