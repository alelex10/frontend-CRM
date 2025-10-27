"use client";
import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

interface ConteinerGradProps extends ContainerProps {
  variant?: "primary" | "secondary" | "tertiary";
  gradientDirection?:
    | "to bottom right"
    | "to top right"
    | "to left"
    | "to right"
    | "to top"
    | "to bottom";	
}

export const ConteinerGrad = styled(Container,
	{
		shouldForwardProp: (prop) => prop !== "variant" && prop !== "gradientDirection",
	}
)<ConteinerGradProps>(
  ({ theme, variant, gradientDirection = "to bottom right" }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    background: {
      primary: `linear-gradient(${gradientDirection} , ${theme.palette.background.default} , ${theme.palette.primary.main})`,
      secondary: `linear-gradient(${gradientDirection} , ${theme.palette.background.default} , ${theme.palette.secondary.main})`,
      tertiary: `linear-gradient(${gradientDirection} , ${theme.palette.background.default} , ${theme.palette.background.paper})`,
    }[variant || "primary"],
    color: theme.palette.text.primary,
    textAlign: "center",
    alignContent: "center",
    // padding: "2rem 3rem",
    minHeight: "100vh",
    justifyContent: "center",
    gap: "2rem",
  })
);
