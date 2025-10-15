"use client";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const ConteinerHome = styled(Container)(({ theme }) => ({
	padding: theme.spacing(0),
	[theme.breakpoints.up("sm")]: {
		padding: theme.spacing(0),
	},
	width: "100%",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(10),
	justifyContent: "space-between",
	textAlign: "center",
	"& > *": {
		padding: 0,
		width: "100%",
	},
})) as typeof Container;

