import { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const themeDefault = createTheme();

const theme: Theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					//? COLOR DE FONDO
					"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
						// .backgroundColor: "#2b2b2b",
						backgroundColor: themeDefault.palette.background.default,
					},
					// "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
					//   backgroundColor: "#2b2b2b",
					// },
					"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
						borderRadius: 0,
						//? COLOR DE LA BARRA
						// .backgroundColor: "#6b6b6b",
						backgroundColor: themeDefault.palette.primary.main,
						//? COLOR DEL BORDE DE LA BARRA
						// .border: "3px solid #2b2b2b",
						border: `0px solid ${themeDefault.palette.background.default}`,
					},
					//? COLOR DEL HOVER
					"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
						backgroundColor: themeDefault.palette.primary.dark,
					},
				},
			},
		},
	},
});

export default theme;
