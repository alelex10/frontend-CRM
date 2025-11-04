import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import NavBar from "../components/navbar/nav-bar";
import { ConteinerGrad } from "./components/conteiner-grad";
import { ConteinerHome } from "./components/conteiner-home";
import { Footer } from "./components/footer";

const linksNavBar = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/about-us" },
];

const cardsHome = [
  {
    title: "📊 Seguimiento de Leads",
    description:
      "Captura, organiza y da seguimiento a cada oportunidad de negocio en un solo lugar.",
  },
  {
    title: "👥 Gestión de Clientes",
    description:
      "Administra y mantene la información de tus clientes de manera eficiente.",
  },
  {
    title: "📈 Gestión de Oportunidades",
    description:
      "Controla el progreso de cada oportunidad y maximiza tus cierres de negocio.",
  },
];

export default function HomePage() {
  
  return (
    <>
      <NavBar links={linksNavBar} />
      <ConteinerHome component={"main"} maxWidth={"xl"} >
        <ConteinerGrad
          component={"section"}
          maxWidth={false}
          sx={{ height: "90vh", p: 0 }}
          gradientDirection="to top"
        >
          <Typography variant="h2">Bienvenido a OrbitCRM</Typography>
          <Typography
            variant="subtitle1"
            sx={{ width: { xs: "100%", md: "50%" }, margin: "0 auto" }}
          >
            Gestiona clientes, oportunidades y proyectos en un solo lugar.
            Nuestro CRM te ayuda a crecer de forma organizada y eficiente.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Button
              component={Link}
              href="/register"
              variant="contained"
              color="primary"
              size="large"
              style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              Comenzar Gratis
            </Button>

            {/*<Button
              href="/login"
              variant="outlined"
              size="large"
              color="primary"
            >
              Iniciar Sesión
            </Button>*/}
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
        <ConteinerGrad maxWidth={"xl"} variant="primary" gradientDirection="to bottom">
          <Typography variant="h4">
            Lleva tu negocio al siguiente nivel
          </Typography>
          <Typography variant="subtitle1">
            Regístrate hoy y empieza a gestionar tus clientes con OrbitCRM.
          </Typography>
          <Button
            component={Link}
            href="/register"
            size="large"
            variant="contained"
            color="primary"
            sx={{ width: "fit-content", margin: "0 auto" }}
            style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          >
            Crear Cuenta
          </Button>
        </ConteinerGrad>
      </ConteinerHome>
      <Footer />
    </>
  );
}
