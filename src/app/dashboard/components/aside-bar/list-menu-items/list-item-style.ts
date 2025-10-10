import ListItemButton, { ListItemButtonProps } from "@mui/material/ListItemButton";
import ListItemIcon, { ListItemIconProps } from "@mui/material/ListItemIcon";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

interface Open {
	open?: boolean;
}

interface ListItemButomAsideProps extends ListItemButtonProps, Open {}
interface ListItemIconAsideProps extends ListItemIconProps, Open {}
interface ListItemTextAsideProps extends ListItemTextProps, Open {}

export const ListItemButomAside = styled(ListItemButton)<ListItemButomAsideProps>(({ theme, open }) => ({
	minHeight: 48,
	px: 2.5,
	justifyContent: open ? "initial" : "center",
}));

export const ListItemIconAside = styled(ListItemIcon)<ListItemIconAsideProps>(({ theme, open }) => ({
	minWidth: 0,
	justifyContent: "center",
	color: "inherit",
	marginRight: open ? theme.spacing(3) : 0,
}));

export const ListItemTextAside = styled(ListItemText)<ListItemTextAsideProps>(({ theme, open }) => ({
	display: open ? "block" : "none",
}));

