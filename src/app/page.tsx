"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const linksNavBar = [
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

const ConteinerHomeGrad = styled(Container)({
	background: "linear-gradient(to bottom right, rgb(37 99 235), rgb(79 70 229))",
	color: "white",
	textAlign: "center",
	alignContent: "center",
});

export default function HomePage() {
	return (
		<>
			{/* <NavBar iconHamburger="line-md:close-to-menu-transition" links={dataNavBar} /> */}
			<Container component={"main"}>
				<ConteinerHomeGrad
					sx={{
						p: "11rem",
						padding: "1rem 1.5rem", // px-6
					}}
				>
					<Typography variant="h3" component={"h1"}>
						Bienvenido a OrbitCRM
					</Typography>
					<Typography variant="subtitle1">
						Gestiona clientes, oportunidades y proyectos en un solo lugar. Nuestro CRM te ayuda a crecer de forma
						organizada y eficiente.
					</Typography>
					<Box style={{}}>
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
				</ConteinerHomeGrad>

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
				<ConteinerHomeGrad>
					<Typography variant="h3" component={"h1"}>
						Lleva tu negocio al siguiente nivel
					</Typography>
					<p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
						Regístrate hoy y empieza a gestionar tus clientes con OrbitCRM.
					</p>
					<Link href="/auth/register">
						<Button variant="contained" size="large" color="primary" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
							Crear Cuenta
						</Button>
					</Link>
				</ConteinerHomeGrad>
			</Container>
		</>
	);
}
