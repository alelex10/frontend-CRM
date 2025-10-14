import { createTheme, useTheme } from "@mui/material/styles";
import { styleScrollbar } from "./theme-general";
import { colorsLight, deepPurple } from "./colors";

export const lightTheme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					...styleScrollbar(colorsLight),
				},
			},
		},
	},
	cssVariables: { nativeColor: true },
	palette: {
		mode: "light",
		primary: { main: deepPurple["500"], light: deepPurple["50"], dark: deepPurple["800"] },
		secondary: { main: deepPurple["700"], light: deepPurple["100"], dark: deepPurple["900"] },
		background: { default: deepPurple["50"], paper: deepPurple["100"] },
		text: { primary: deepPurple["900"], secondary: deepPurple["700"] },
		divider: deepPurple["200"],
	},
});

export const lightThemeOKLCH = createTheme({
	cssVariables: { nativeColor: true },
	palette: {
		mode: "dark",
		primary: {
			main: colorsLight.color7,
			light: colorsLight.color2,
			dark: colorsLight.color10,
		},
		secondary: {
			main: colorsLight.color5,
			light: colorsLight.color6,
			dark: colorsLight.color9,
		},
		background: {
			default: colorsLight.color10,
			paper: colorsLight.color8,
		},
		text: {
			primary: colorsLight.color1,
			secondary: colorsLight.color4,
		},
		divider: colorsLight.color7,
	},

	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					...styleScrollbar(colorsLight),
				},
			},
		},
	},
});
