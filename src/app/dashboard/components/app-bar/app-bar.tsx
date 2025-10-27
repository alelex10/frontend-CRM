import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { drawerWidth } from "../aside-bar/config";
import { Iconify } from "../../../../components/icons/icon";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useThemeStore } from "../../../themes/theme-store";

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

export const AppBarAnimated = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),

	variants: [
		{
			props: ({ open }) => open,
			style: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(["width", "margin"], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

interface ToolbarProps {
	open?: boolean;
	handleDrawerOpen?: () => void;
}

export const AppBar = ({ open, handleDrawerOpen }: ToolbarProps) => {
	const { darkMode, toggleTheme } = useThemeStore();

	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<AppBarAnimated
			position="fixed"
			open={open}
			sx={{
				[theme.breakpoints.down("sm")]: {
					boxShadow: "none",
				},
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={[
						{
							marginRight: 5,
							display: open || !isLarge ? "none" : "block",
						},
					]}
				>
					<Iconify icon="material-symbols:menu-open" rotate={90} />
				</IconButton>

				<Typography variant="h6" noWrap component="div">
					Mini variant drawer
				</Typography>
				<IconButton
					onClick={() => toggleTheme()}
					sx={{
						marginLeft: "auto",
					}}
				>
					<Iconify icon={darkMode ? "eva:moon-fill" : "eva:sun-fill"} />
				</IconButton>
			</Toolbar>
		</AppBarAnimated>
	);
};
