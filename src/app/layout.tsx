import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeDefault } from "./themes/theme-default";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home - OrbitCRM",
	description: "Gestiona clientes, compañias y oportunidades en un solo lugar. Nuestro CRM te ayuda a crecer de forma organizada y eficiente.",
	keywords: [
    	"OrbitCRM",
    	"CRM",
    	"Gestión de Clientes",
    	"Gestión de Oportunidades",
	],
	icons: {
		icon: "/assets/img/orbitcrm.png",
		shortcut: "/assets/img/orbitcrm.png",
		apple: "/assets/img/orbitcrm.png",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<InitColorSchemeScript attribute="class" />
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeDefault>{children}</ThemeDefault>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
