"use client";
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    subtitle1: {
      fontSize: "1.2rem",
    },
    [baseTheme.breakpoints.up("md")]:{
      subtitle1: {
        fontSize: "1.5rem",
      },
    }
  },
});

export default theme;
