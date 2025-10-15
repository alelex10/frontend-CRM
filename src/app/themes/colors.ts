const hue = 290;

/* Usar la paleta del video */
export const colorsLight = {
	color10: `oklch(99% .05 ${hue})`,
	color9: `oklch(90% .1 ${hue})`,
	color8: `oklch(80% .2 ${hue})`,
	color7: `oklch(72% .25 ${hue})`,
	color6: `oklch(67% .31 ${hue})`,
	color5: `oklch(50% .27 ${hue})`,
	color4: `oklch(35% .25 ${hue})`,
	color3: `oklch(25% .2 ${hue})`,
	color2: `oklch(13% .2 ${hue})`,
	color1: `oklch(5% .2 ${hue})`,
};

export const colorsDark = {
	color10: `oklch(5% .2 ${hue})`,
	color9: `oklch(13% .2 ${hue})`,
	color8: `oklch(25% .2 ${hue})`,
	color7: `oklch(35% .25 ${hue})`,
	color6: `oklch(50% .27 ${hue})`,
	color5: `oklch(67% .31 ${hue})`,
	color4: `oklch(72% .25 ${hue})`,
	color3: `oklch(80% .2 ${hue})`,
	color2: `oklch(90% .1 ${hue})`,
	color1: `oklch(99% .05 ${hue})`,
};

export const deepPurple = {
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

export const createPalete = (paleteColor: typeof colorsLight) => ({

	primary: {
		main: paleteColor.color6, // Un púrpura intenso como principal
		light: paleteColor.color9, // Un púrpura muy claro para variantes "light"
		dark: paleteColor.color5, // Un púrpura oscuro para variantes "dark"
	},
	secondary: {
		main: paleteColor.color5, // Un púrpura medio para secundario
		light: paleteColor.color3, // Un púrpura claro para variante "light"
		dark: paleteColor.color2, // Un púrpura más saturado para variante "dark"
	},
	background: {
		default: paleteColor.color9, // Casi blanco para el fondo principal
		paper: paleteColor.color8, // Blanco ligeramente teñido para elementos de "papel"
	},
	text: {
		primary: paleteColor.color1, // Púrpura oscuro para texto principal
		secondary: paleteColor.color3, // Púrpura brillante para texto secundario
	},
	divider: paleteColor.color7, // Púrpura claro para divisores
});
