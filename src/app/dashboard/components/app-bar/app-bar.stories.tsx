import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AppBar } from "./app-bar";
import React, { useState } from "react";

const meta = {
	component: AppBar,
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const AppBarStory = () => {
const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
    </>
  );
};

export const Default: Story = {
  render: () => <AppBarStory />,
};
