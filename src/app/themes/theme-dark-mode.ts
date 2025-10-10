import { createTheme } from "@mui/material/styles";
import theme from "./theme-general";

export const darkTheme = createTheme(theme, {
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
