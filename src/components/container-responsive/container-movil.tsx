import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const ContainerMovil = styled(Container)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		paddingLeft: 0,
		paddingRight: 0,
		maxWidth: "100vw",
	},
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
})) as typeof Container;

