// import { Link as RouterLink , LinkProps as RouterLinkProps } from 'react-router';
import { LinkProps } from "@mui/material/Link";
import { createTheme } from "@mui/material/styles";
import RouterLink from "next/link";
import { LinkProps as RouterLinkProps } from "next/link";
import React from "react";

const LinkBehavior = React.forwardRef<
	HTMLAnchorElement,
	Omit<RouterLinkProps, "href"> & { href: RouterLinkProps["href"] }
>((props, ref) => {
	const { href, ...other } = props;
	// Map href (Material UI) -> to (react-router)
	return <RouterLink ref={ref} href={href} {...other} />;
});

const themeNavegation = createTheme({
	components: {
		MuiLink: {
			defaultProps: {
				component: LinkBehavior,
			} as LinkProps,
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehavior,
			},
		},
	},
});

export default themeNavegation;
