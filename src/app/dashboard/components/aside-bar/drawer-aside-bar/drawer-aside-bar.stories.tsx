import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Drawer } from "./drawer-aside-bar";
import IconButton from "@mui/material/IconButton";
import { Iconify } from "../../../../../components/icons/icon";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButomAside, ListItemIconAside, ListItemTextAside } from "../list-menu-items/list-item-style";
import { DrawerHeader } from "../drawer-header-aside-bar/drawer-header-aside-bar";
import { LIST_MENU_ITEMS } from "../../../layout";

const meta = {
	component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerExample = (args: any) => {
	const [open, setOpen] = useState(true);

	const handleDrawerClose = () => setOpen(false);
	const handleDrawerOpen = () => setOpen(true);

	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader>
				<IconButton color="inherit" onClick={open ? handleDrawerClose : handleDrawerOpen}>
					<Iconify icon="material-symbols:menu-open" />
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{LIST_MENU_ITEMS?.map((item) => (
					<ListItem key={item.label} disablePadding sx={{ display: "block" }}>
						<ListItemButomAside open={open}>
							<ListItemIconAside open={open}>
								{item.icon && <Iconify icon={item.icon} color="inherit" />}
							</ListItemIconAside>
							<ListItemTextAside primary={item.label} open={open} />
						</ListItemButomAside>
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
};

export const Default: Story = {
	args: { open: true, variant: "permanent" },
	render: (args) => (
		<>
			<DrawerExample {...args} />
		</>
	),
};

