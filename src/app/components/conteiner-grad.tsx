"use client";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const ConteinerGrad = styled(Container)(({ theme }) => ({
	display: "flex",
	width: "100%",
	flexDirection: "column",
	background: `linear-gradient(to bottom right,${theme.palette.background.default} , ${theme.palette.background.paper})`,
	color: theme.palette.text.primary,
	textAlign: "center",
	alignContent: "center",
	padding: "2rem 3rem",
	minHeight: "100vh",
	justifyContent: "center",
	gap: "2rem",
})) as typeof Container;
