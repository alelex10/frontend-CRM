import type { Metadata } from "next";
import { Container, Typography, Box, Button, Grid, Avatar, Link } from "@mui/material";
import NavBar from "../../components/navbar/nav-bar";
import { Footer } from "../components/footer";
//import Link from "next/link";
import { ConteinerGrad } from "../components/conteiner-grad";
import { ConteinerHome } from "../components/conteiner-home";

export const metadata: Metadata = {
  title: "Sobre Nosotros - OrbitCRM",
  description:
    "Conocé un poco más sobre OrbitCRM, la plataforma que ayuda a empresas a gestionar clientes, compañias y oportunidades de manera eficiente.",
  keywords: [
    "OrbitCRM",
    "Sobre Nosotros",
    "CRM",
    "Gestión de Clientes",
    "Gestión de Oportunidades",
  ],
};

const linksNavBar = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/about-us" },
];

const teamMembers = [
  {
    name: "Alejandro Verduguez",
    role: "Desarrollador Frontend/Backend",
    username: "alelex10",
    avatar: "/assets/team/alejandro.png",
  },
  {
    name: "Paul Diego Aguilar",
    role: "Desarrollador Backend/Frontend",
    username: "fwmc-dev",
    avatar: "/assets/team/paul.jpg",
  },
  {
    name: "Agustin Lujan",
    role: "Desarrollador Frontend",
    username: "AgusLujan-AL",
    avatar: "/assets/team/agus.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <NavBar links={linksNavBar} />
      <ConteinerHome component={"main"} maxWidth={"xl"}>
        {/* Sección Quiénes Somos */}
        <ConteinerGrad
          component={"section"}
          maxWidth={false}
          sx={{ height: "70vh", p: 4, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}
          gradientDirection="to top"
        >
          <Typography variant="h2" gutterBottom>
            ¿Quiénes Somos?
          </Typography>
          <Typography variant="subtitle1" sx={{ width: { xs: "100%", md: "60%" }, margin: "0 auto" }}>
            En OrbitCRM ayudamos a empresas y/o negocios a gestionar clientes, compañias y oportunidades de forma organizada y eficiente. Nuestra misión es simplificar la gestión de negocios para que puedas centrarte en crecer y ofrecer el mejor servicio a tus clientes.
          </Typography>
        </ConteinerGrad>

        {/* Sección Nuestro Equipo */}
        <Container component={"section"} sx={{ py: 8 }}>
          <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center" }}>
            Nuestro Equipo
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member) => (
              <Grid size={{xs: 12, sm: 6, md: 4}} key={member.name} sx={{ textAlign: "center" }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 120, height: 120, margin: "0 auto 1rem auto" }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  @
                  <Link
                    href={`https://github.com/${member.username}`}
                    target="_blank" rel="noreferrer"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    }}
                  >
                    {member.username}
                  </Link>
                </Typography>
                <Typography variant="subtitle2" fontWeight='bold' color="text.secondary">{member.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA Final */}
        <ConteinerGrad maxWidth={"xl"} variant="primary" gradientDirection="to bottom" sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Únete a OrbitCRM
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            Comienza hoy mismo a organizar tus clientes, oportunidades y proyectos con nuestra plataforma.
          </Typography>
          <Button
            component={Link}
            href="/register"
            size="large"
            variant="contained"
            color="primary"
            sx={{ width: "fit-content", margin: "0 auto", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          >
            Crear Cuenta
          </Button>
        </ConteinerGrad>
      </ConteinerHome>
      <Footer />
    </>
  );
}