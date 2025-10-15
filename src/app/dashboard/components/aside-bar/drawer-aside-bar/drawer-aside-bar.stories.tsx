import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Drawer } from "./drawer-styled";
import IconButton from "@mui/material/IconButton";
import { Iconify } from "../../../../../components/icons/icon";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButomAside, ListItemIconAside, ListItemTextAside } from "../list-menu-items/list-item-style";
import { DrawerHeader } from "../drawer-header-aside-bar/drawer-header-aside-bar";
import { LIST_MENU_ITEMS } from "../../../layout";
import { DrawerAsideBar } from "./drawer-aside-bar";

const meta = {
	component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerExample = (args: any) => {
	const [open, setOpen] = useState(true);

	return <DrawerAsideBar listIntems={LIST_MENU_ITEMS} open={open} setOpen={setOpen}></DrawerAsideBar>;
};

export const Default: Story = {
	args: { open: true, variant: "permanent" },
	render: (args) => (
		<>
			<DrawerExample {...args} />
		</>
	),
};
