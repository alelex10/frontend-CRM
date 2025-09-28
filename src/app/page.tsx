"use client";

import { NavBar } from "@/components/navbar/NavBar";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col">
        <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6 py-16
        bg-gradient-to-br from-blue-600 to-indigo-700 text-white 
        md:flex-1">
          <h1 className="text-5xl font-bold mb-6">Bienvenido a OrbitCRM</h1>
          <p className="text-2xl mb-8">
            Gestiona clientes, oportunidades y proyectos en un solo lugar.
            Nuestro CRM te ayuda a crecer de forma organizada y eficiente.
          </p>
          <div className="flex gap-4">
            <Link href="/auth/register">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="shadow-lg"
              >
                Comenzar Gratis
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outlined" color="inherit" size="large">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-12">
            Funcionalidades Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-md">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  📊 Seguimiento de Leads
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Captura, organiza y da seguimiento a cada oportunidad de
                  negocio en un solo lugar.
                </Typography>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🤝 Gestión de Clientes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Administra información de tus clientes y mantén todo el
                  historial de interacciones.
                </Typography>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🚀 Reportes e Insights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Obtén métricas clave para tomar decisiones informadas y hacer
                  crecer tu negocio.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-indigo-700 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lleva tu negocio al siguiente nivel
          </h2>
          <p className="text-lg mb-8">
            Regístrate hoy y empieza a gestionar tus clientes con OrbitCRM.
          </p>
          <Link href="/auth/register">
            <Button
              variant="contained"
              size="large"
              color="primary"
              className="shadow-lg"
            >
              Crear Cuenta
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
}
