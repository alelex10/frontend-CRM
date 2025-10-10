import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LIST_MENU_ITEMS } from "../../layout";

import AsideBar from "./aside-bar";

const meta = {
	component: AsideBar,
} satisfies Meta<typeof AsideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => <AsideBar listMenuItems={LIST_MENU_ITEMS} {...args} />,
};
