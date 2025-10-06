import { createTheme, useTheme } from "@mui/material/styles";

const hue = 290;

/* Usar la paleta del video */
const colors = {
	color1: `oklch(0.299 0.198 ${hue})`,
	color2: `oklch(0.381 0.252 ${hue})`,
	color3: `oklch(0.462 0.300 ${hue})`,
	color4: `oklch(0.543 0.247 ${hue})`,
	color5: `oklch(0.625 0.197 ${hue})`,
	color6: `oklch(0.706 0.149 ${hue})`,
	color7: `oklch(0.787 0.105 ${hue})`,
	color8: `oklch(0.869 0.063 ${hue})`,
	color9: `oklch(0.950 0.023 ${hue})`,
};

const deepPurple = {
	"50": "#ede7f6",
	"100": "#d1c4e9",
	"200": "#b39ddb",
	"300": "#9575cd",
	"400": "#7e57c2",
	"500": "#673ab7",
	"600": "#5e35b1",
	"700": "#512da8",
	"800": "#4527a0",
	"900": "#311b92",
	A100: "#b388ff",
	A200: "#838286ff",
	A400: "#651fff",
	A700: "#6200ea",
};
export const lightTheme = createTheme({
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
		mode: "light",
		primary: {
			main: colors.color3, // Un púrpura intenso como principal
			light: colors.color8, // Un púrpura muy claro para variantes "light"
			dark: colors.color1, // Un púrpura oscuro para variantes "dark"
		},
		secondary: {
			main: colors.color5, // Un púrpura medio para secundario
			light: colors.color7, // Un púrpura claro para variante "light"
			dark: colors.color2, // Un púrpura más saturado para variante "dark"
		},
		background: {
			default: colors.color9, // Casi blanco para el fondo principal
			paper: colors.color8, // Blanco ligeramente teñido para elementos de "papel"
		},
		text: {
			primary: colors.color1, // Púrpura oscuro para texto principal
			secondary: colors.color4, // Púrpura brillante para texto secundario
		},
		divider: colors.color7, // Púrpura claro para divisores
	},
});


