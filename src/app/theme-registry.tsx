"use client";

import { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { darkTheme } from "./themes/theme-dark-mode";
import { lightTheme, lightThemeOKLCH } from "./themes/theme-light-mode";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);

	// Ejemplo: atajo con tecla "D" para cambiar modo (podés reemplazarlo luego por un botón)
	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightThemeOKLCH}>
			<CssBaseline />
			{children}
			<Button onClick={toggleDarkMode}>{darkMode ? "☀️" : "🌙"}</Button>
		</ThemeProvider>
	);
}

