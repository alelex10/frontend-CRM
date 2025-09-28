import Link from "next/link";
import { Button, Drawer, Tab, Tabs } from "@mui/material";
import { useState } from "react";
export const NavBar = () => {
  const [value, setValue] = useState("one");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="h-[10vh] bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center items">
        <Link href="/" className="text-2xl font-bold text-indigo-600 ">
          OrbitCRM
        </Link>
        <div className="hidden sm:block">
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab sx={{ height: "10vh" }} value="one" label="Item One" />
            <Tab sx={{ height: "10vh" }} value="two" label="Item Two" />
            <Tab sx={{ height: "10vh" }} value="three" label="Item Three" />
          </Tabs>
        </div>
        <Button onClick={toggleDrawer(true)}>anchored top</Button>
        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          hola
        </Drawer>
        <div className="max-sm:hidden">
          <Link href="/auth/register">
            <Button className="" variant="contained">
              Registrarse
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
