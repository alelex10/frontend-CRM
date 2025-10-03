"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const dataNavBar = [
	{
		label: "Inicio",
		href: "/",
		value: "one",
	},
	{
		label: "Clientes",
		href: "/clients",
		value: "two",
	},
	{
		label: "Oportunidades",
		href: "/opportunities",
		value: "three",
	},
	{
		label: "Proyectos",
		href: "/projects",
		value: "four",
	},
];

const cardsHome = [
	{
		title: "📊 Seguimiento de Leads",
		description: "Captura, organiza y da seguimiento a cada oportunidad de negocio en un solo lugar.",
	},
	{
		title: "👥 Gestión de Clientes",
		description: "Administra y mantene la información de tus clientes de manera eficiente.",
	},
	{
		title: "📈 Gestión de Proyectos",
		description: "Administra y mantene la información de tus proyectos de manera eficiente.",
	},
];

const MyConteiner = () => {
	
}

export default function HomePage() {
	return (
		<>
			{/* <NavBar iconHamburger="line-md:close-to-menu-transition" links={dataNavBar} /> */}
			<main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
				<Container
					sx={{
						p: "11rem",
						background: "linear-gradient(to bottom right, rgb(37 99 235), rgb(79 70 229))",
						padding: "1rem 1.5rem", // px-6
						color: "white",
					}}
				>
					<Typography variant="h2" component={"h1"}>
						Bienvenido a OrbitCRM
					</Typography>
					<Typography variant="subtitle1">
						Gestiona clientes, oportunidades y proyectos en un solo lugar. Nuestro CRM te ayuda a crecer de forma
						organizada y eficiente.
					</Typography>
					<Box style={{ display: "flex", gap: "1rem" }}>
						<Link href="/auth/register">
							<Button
								variant="contained"
								color="primary"
								size="large"
								style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
							>
								Comenzar Gratis
							</Button>
						</Link>
						<Link href="/auth/login">
							<Button variant="outlined" color="inherit" size="large">
								Iniciar Sesión
							</Button>
						</Link>
					</Box>
				</Container>

				{/* Features */}
				<Container>
					<Typography variant="h4">Funcionalidades Clave</Typography>
					<Grid container spacing={2}>
						{cardsHome.map((card) => (
							<Grid size={4} key={card.title}>
								<Card style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{card.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{card.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>

				{/* CTA Final */}
				<Container>
					{" "}
					{/* py-20 bg-indigo-700 text-center text-white */}
					<h2 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "1.5rem" }} className="md:text-4xl">
						Lleva tu negocio al siguiente nivel
					</h2>
					<p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
						{" "}
						Regístrate hoy y empieza a gestionar tus clientes con OrbitCRM.
					</p>
					<Link href="/auth/register">
						<Button variant="contained" size="large" color="primary" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
							Crear Cuenta
						</Button>
					</Link>
				</Container>
			</main>
		</>
	);
}
