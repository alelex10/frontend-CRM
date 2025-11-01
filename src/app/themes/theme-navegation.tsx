"use client";
import { LinkProps } from "@mui/material/Link";
import { createTheme } from "@mui/material/styles";
import RouterLink from "next/link";
import { LinkProps as RouterLinkProps } from "next/link";
import { forwardRef } from "react";

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "href"> & { href: RouterLinkProps["href"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} href={href} {...other} />;
});


export const themeNavegation = createTheme({
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            padding: "0.6rem ",
          },
        },
      },
    },
  },
});
