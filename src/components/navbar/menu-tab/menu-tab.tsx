"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NavLink } from "../nav-bar";
import { styled, useTheme } from "@mui/material";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TapCustom = styled(Tab)(({ theme }) => ({
	height: "10vh",
	color: theme.palette.text.secondary,
	"&.Mui-selected": {
		color: theme.palette.primary.contrastText,
		fontWeight: "bold",
	},
})) as typeof Tab;

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

interface BasicTabsProps {
	links?: NavLink[];
}
export default function MenuTab({ links }: BasicTabsProps) {
	const [value, setValue] = React.useState(0);
	const theme = useTheme();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ display: { xs: "none", md: "block" } }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					{links?.map((item, index) => (
						<TapCustom key={item.label} label={item.label} value={index} {...a11yProps(index)} />
					))}
				</Tabs>
			</Box>
		</Box>
	);
}
