import type { Preview } from "@storybook/nextjs-vite";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { lightThemeOKLCH} from "../src/app/themes/theme-light-mode";
import { darkTheme } from "../src/app/themes/theme-dark-mode";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
	globalTypes: {
		theme: {
			description: "Global theme for components",
			toolbar: {
				// The label to show for this toolbar item
				title: "Theme",
				icon: "circlehollow",
				// Array of plain string values or MenuItem shape (see below)
				items: ["light", "dark"],
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: "light",
	},
};



export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: lightThemeOKLCH,
			dark: darkTheme,
		},
		defaultTheme: "dark",
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
];

export default preview;
