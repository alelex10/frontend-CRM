import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface TabScrollNavProps {
	children?: React.ReactNode;
	hidden?: boolean;
}

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const Data = [
	{
		id: 1,
		name: "Item One",
	},
	{
		id: 2,
		name: "Item Two",
	},
	{
		id: 3,
		name: "Item Three",
	},
	{
		id: 4,
		name: "Item Four",
	},
	{
		id: 5,
		name: "Item Five",
	},
];

export default function TabScrollNav({ children, hidden }: TabScrollNavProps) {
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box hidden={hidden} sx={{ maxWidth: { xs: "100%", sm: 480 }, bgcolor: "background.paper" }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
					sx={{
						color: theme.palette.primary.contrastText,
					}}
				>
					{Data.map((item, index) => (
						<Tab
							sx={{
								backgroundColor: theme.palette.primary.main,
								color: theme.palette.text.primary,
								"&.Mui-selected": {
									color: theme.palette.primary.contrastText,
								},
							}}
							label={item.name}
							key={item.id}
						/>
					))}
				</Tabs>
			</AppBar>
			{Data.map((item, index) => (
				<TabPanel value={value} index={index} key={index}>
					Item {index + 1}
				</TabPanel>
			))}
		</Box>
	);
}

