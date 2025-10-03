import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";



// Define la interfaz para los enlaces si aún no la tienes
interface NavLink {
	label: string;
	href: string;
	value?: string | number; // Añadido para Tabs
}

interface NavBarProps {
	links?: NavLink[];
	iconHamburger?: string; // Este prop se maneja ahora con un ícono de Material UI
	enabledDrawer?: boolean; // Prop para controlar si el drawer está habilitado
}

export default function NavBar({ links, iconHamburger, enabledDrawer = true }: NavBarProps) {
	const [value, setValue] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);



	return (
		<AppBar position="sticky" color="default" elevation={2} sx={{ height: "10vh", backgroundColor: "white" }}>
			
		</AppBar>
	);
}
