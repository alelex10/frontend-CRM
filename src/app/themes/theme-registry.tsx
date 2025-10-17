"use client";

import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { darkTheme, darkThemeOKLCH } from "./theme-dark-mode";
import { lightTheme, lightThemeOKLCH } from "./theme-light-mode";
import { useThemeStore } from "./themeStore";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	const { darkMode } = useThemeStore();

	return (
		<ThemeProvider theme={darkMode ? darkThemeOKLCH : lightThemeOKLCH}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
