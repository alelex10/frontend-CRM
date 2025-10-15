import { createTheme, useTheme } from "@mui/material/styles";
import { styleScrollbar } from "./theme-general";
import { colorsLight, createPalete, deepPurple } from "./colors";
import themeNavegation from "./theme-navegation";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...styleScrollbar(colorsLight),
        },
      },
    },
  },
  cssVariables: { nativeColor: true },
  palette: {
    mode: "light",
    primary: {
      main: deepPurple["500"],
      light: deepPurple["50"],
      dark: deepPurple["800"],
    },
    secondary: {
      main: deepPurple["700"],
      light: deepPurple["100"],
      dark: deepPurple["900"],
    },
    background: { default: deepPurple["50"], paper: deepPurple["100"] },
    text: { primary: deepPurple["900"], secondary: deepPurple["700"] },
    divider: deepPurple["200"],
  },
});


export const lightThemeOKLCH = createTheme(
  {
    cssVariables: { nativeColor: true },
    palette: { ...createPalete(colorsLight), mode: "light" },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...styleScrollbar(colorsLight),
          },
        },
      },
    },
  },
  themeNavegation
);
