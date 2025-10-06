"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import NavBar from "../components/navbar/nav-bar";
import { themes } from "storybook/internal/theming";

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

const ConteinerGrad = styled(Container)(({ theme }) => ({
	display: "flex",
	width: "100%",
	flexDirection: "column",
	background: `linear-gradient(to bottom right,${theme.palette.background.default} , ${theme.palette.background.paper})`,
	color: theme.palette.text.primary,
	textAlign: "center",
	alignContent: "center",
	padding: "2rem 3rem",
	minHeight: "100vh",
	justifyContent: "center",
	gap: "2rem",
})) as typeof Container;

const ConteinerHome = styled(Container)(({ theme }) => ({
	margin: 0,
	padding: 0,
	width: "100%",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(10),
	justifyContent: "space-between",
	textAlign: "center",
	"& > *": {
		padding: 0,
		width: "100%",
	},
})) as typeof Container;

export default function HomePage() {
	const theme = useTheme();
	const isLarge = theme.breakpoints.up("md");

	return (
		<>
			<NavBar links={linksNavBar} />
			<ConteinerHome component={"main"} maxWidth={false}>
				<ConteinerGrad component={"section"} maxWidth={false} sx={{ height: "90vh", p: 0 }}>
					<Typography variant="h2">Bienvenido a OrbitCRM</Typography>
					<Typography variant="subtitle1" sx={{ width: { xs: "100%", md: "50%" }, margin: "0 auto" }}>
						Gestiona clientes, oportunidades y proyectos en un solo lugar. Nuestro CRM te ayuda a crecer de forma
						organizada y eficiente.
					</Typography>
					<Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
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
							<Button variant="outlined" size="large">
								Iniciar Sesión
							</Button>
						</Link>
					</Box>
				</ConteinerGrad>

				{/* Features */}
				<Container component={"section"}>
					<Typography variant="h4" sx={{ marginBottom: "2rem" }}>
						Funcionalidades Clave
					</Typography>
					<Grid container spacing={{ xs: 10, md: 4 }}>
						{cardsHome.map((card) => (
							<Grid size={{ xs: 12, md: 4 }} key={card.title}>
								<Card style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{card.title}
										</Typography>
										<Typography variant="body1" color="text.secondary">
											{card.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>

				{/* CTA Final */}
				<ConteinerGrad>
					<Typography variant="h4">Lleva tu negocio al siguiente nivel</Typography>
					<Typography variant="subtitle1">Regístrate hoy y empieza a gestionar tus clientes con OrbitCRM.</Typography>
					<Link href="/auth/register">
						<Button variant="contained" size="large" color="primary" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
							Crear Cuenta
						</Button>
					</Link>
				</ConteinerGrad>
			</ConteinerHome>
		</>
	);
}
