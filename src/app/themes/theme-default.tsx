"use client";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { themeNavegation } from "./theme-navegation";

export function ThemeDefault({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={themeNavegation}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

