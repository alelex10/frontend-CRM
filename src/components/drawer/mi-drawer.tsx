import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  toggleDrawer: Dispatch<SetStateAction<boolean>>;
}

export const MyDrawer = ({ open, toggleDrawer }: Props) => {
  const mainLinks = [
    { text: "Inicio", href: "/" },
    { text: "Sobre Nosotros", href: "/sobre-nosotros" },
  ];

  const authLinks = [
    { text: "Iniciar Sesión", href: "/login" },
    { text: "Registrarse", href: "/register" },
  ];

  const list = () => (
    <Box role="presentation" onKeyDown={() => toggleDrawer(false)}>
      <List>
        {mainLinks.map(({ text, href }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              href={href}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {authLinks.map(({ text, href }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              href={href}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      sx={{
        zIndex: 100,
        width: "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          top: "10vh",
        },
      }}
      anchor="top"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
};
