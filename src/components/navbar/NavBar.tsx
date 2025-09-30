import Link from "next/link";
import { Button, Drawer, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { MyDrawer } from "../drawer/MyDrawer";
import { Icon } from "@iconify/react";

interface Link {
	label: string;
	href: string;
	value: string;
}

interface Props {
	enabledDrawer?: boolean;
	iconHamburger: string;
	links?: Link[];
}

export const NavBar = ({ enabledDrawer = true, iconHamburger, links }: Props) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [value, setValue] = useState("one");

	return (
		<header className="h-[10vh] bg-white shadow-md sticky top-0 z-50">
			<nav className="max-w-7xl mx-auto px-6 flex justify-between items-center items h-full">
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
						{links?.map((link) => (
							<Tab value={link.value} sx={{ height: "10vh" }} key={link.label} label={link.label} />
						))}
					</Tabs>
				</div>

				{/* ----------- Drawer ------------*/}
				<MyDrawer open={openDrawer} toggleDrawer={setOpenDrawer} />
				<Icon
					onClick={() => enabledDrawer && setOpenDrawer(!openDrawer)}
					className="cursor-pointer"
					icon={iconHamburger}
					width={40}
					color="#a83c3c"
				/>

				<div className="max-sm:hidden">
					<Link href="/auth/register">
						<Button className="" variant="contained">
							Comenzar Gratis
						</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
};
