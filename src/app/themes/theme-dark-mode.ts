import { createTheme } from "@mui/material/styles";
import { styleScrollbar } from "./theme-general";
import { colorsDark } from "./colors";


export const darkTheme = createTheme({
	cssVariables: { nativeColor: true },
	palette: {
		mode: "dark",
		primary: { main: "#60A5FA", light: "#93C5FD", dark: "#1E3A8A" },
		secondary: { main: "#A78BFA", light: "#C4B5FD", dark: "#4C1D95" },
		background: { default: "#0F172A", paper: "#1E293B" },
		text: { primary: "#F8FAFC", secondary: "#94A3B8" },
		divider: "#334155",
	},
});

export const darkThemeOKLCH = createTheme({
	cssVariables: { nativeColor: true },
	palette: {
		mode: "light",
		primary: {
			main: colorsDark.color3, // Un púrpura intenso como principal
			light: colorsDark.color8, // Un púrpura muy claro para variantes "light"
			dark: colorsDark.color1, // Un púrpura oscuro para variantes "dark"
		},
		secondary: {
			main: colorsDark.color5, // Un púrpura medio para secundario
			light: colorsDark.color7, // Un púrpura claro para variante "light"
			dark: colorsDark.color2, // Un púrpura más saturado para variante "dark"
		},
		background: {
			default: colorsDark.color9, // Casi blanco para el fondo principal
			paper: colorsDark.color8, // Blanco ligeramente teñido para elementos de "papel"
		},
		text: {
			primary: colorsDark.color1, // Púrpura oscuro para texto principal
			secondary: colorsDark.color4, // Púrpura brillante para texto secundario
		},
		divider: colorsDark.color7, // Púrpura claro para divisores
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					...styleScrollbar(colorsDark),
				},
			},
		},
	},
});
