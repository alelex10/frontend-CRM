import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const ContainerDesktop = styled(Container)(({ theme }) => ({
	[theme.breakpoints.up("sm")]: {
		paddingLeft: 0,
		paddingRight: 0,
		maxWidth: "100vw",
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
})) as typeof Container;

