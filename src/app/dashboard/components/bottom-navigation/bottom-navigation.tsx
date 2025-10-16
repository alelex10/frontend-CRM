import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Iconify } from "../../../../components/icons/icon";
import { LIST_MENU_ITEMS } from "../../layout";

export default function LabelBottomNavigation() {
	const [value, setValue] = React.useState("recents");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }} value={value} onChange={handleChange}>
			{LIST_MENU_ITEMS?.map((item) => (
				<BottomNavigationAction
					href={item.href}
					key={item.label}
					label={item.label}
					value={item.href}
					icon={item.icon && <Iconify icon={item.icon} fontSize={43} />}
				/>
			))}
		</BottomNavigation>
	);
}
