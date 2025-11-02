import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Drawer } from "./drawer-styled";
import { useState } from "react";
import { LIST_MENU_ITEMS } from "../../../layout";
import { DrawerAsideBar } from "./drawer-aside-bar";

const meta = {
	component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerExample = () => {
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
