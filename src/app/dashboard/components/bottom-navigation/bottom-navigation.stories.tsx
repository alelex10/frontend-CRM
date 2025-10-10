import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import BottomNavigation from './bottom-navigation';

const meta = {
	component: BottomNavigation,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

