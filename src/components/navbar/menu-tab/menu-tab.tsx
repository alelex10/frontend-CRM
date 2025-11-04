"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NavLink } from "../nav-bar";
import { styled } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TapCustom = styled(Tab)(({ theme }) => ({
  height: "10vh",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
})) as typeof Tab;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  links?: NavLink[];
}

export default function MenuTab({ links }: BasicTabsProps) {
  const pathname = usePathname();

  // Seleccionamos la pestaña actual
  const currentIndex =
    links?.findIndex((link) => link.href === pathname) ?? 0;

  const [value, setValue] = React.useState(currentIndex);

  React.useEffect(() => {
    // Si cambia la URL, actualizamos la pestaña activa
    setValue(currentIndex);
  }, [currentIndex]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {links?.map((item, index) => (
            <TapCustom
              key={item.label}
              label={item.label}
              value={index}
              component={Link}
              href={item.href}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
