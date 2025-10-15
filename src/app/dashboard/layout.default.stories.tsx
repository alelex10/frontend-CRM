import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Layout from "./layout";

const meta = {
	component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
