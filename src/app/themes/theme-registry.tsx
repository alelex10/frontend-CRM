"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkThemeOKLCH } from "./theme-dark-mode";
import { lightThemeOKLCH } from "./theme-light-mode";
import { useThemeStore } from "./theme-store";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	const { darkMode } = useThemeStore();

	return (
		<ThemeProvider theme={darkMode ? darkThemeOKLCH : lightThemeOKLCH}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
