import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavBar from './nav-bar';

const meta = {
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};