"use client";
import { createTheme } from "@mui/material/styles";
import { styleScrollbar } from "./theme-general";
import { colorsDark, createPalete } from "./colors";
import { themeNavegation } from "./theme-navegation";

export const darkTheme = createTheme({
	cssVariables: {
		nativeColor: true,
	},
	palette: {
		mode: "dark",
		primary: { main: "#60A5FA", light: "#93C5FD", dark: "#1E3A8A" },
		secondary: { main: "#A78BFA", light: "#C4B5FD", dark: "#4C1D95" },
		background: { default: "#0F172A", paper: "#1E293B" },
		text: { primary: "#F8FAFC", secondary: "#94A3B8" },
		divider: "#334155",
	},
});

export const darkThemeOKLCH = createTheme(
	{
		cssVariables: {
			nativeColor: true,
			cssVarPrefix: "nativeColor", // This is for the demo only, you don't need to set this to use the feature
			colorSchemeSelector: "data-mui-color-scheme",
		},
		palette: { ...createPalete(colorsDark), mode: "dark" },
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					html: {
						...styleScrollbar(colorsDark),
					},
				},
			},
		},
	},
	themeNavegation
);
