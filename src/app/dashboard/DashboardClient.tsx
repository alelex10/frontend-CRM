"use client";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardClient() {

  const stats = [
    { label: "Ventas totales", value: "5.2M", color: "#7B61FF" },
    { label: "Tasa de ventas", value: "16.92%", color: "#5B8DEF" },
    { label: "Tasa de cierre", value: "14.47%", color: "#3DD9EB" },
    { label: "Días promedio para cerrar", value: "60.7", color: "#31C48D" },
    { label: "Valor de las oportunidades", value: "77.8M", color: "#4F46E5" },
    { label: "Deals abiertas", value: "1.6K", color: "#3B82F6" },
    { label: "Valor ponderado", value: "35.6M", color: "#06B6D4" },
    { label: "Antigüedad promedio de las ventas", value: "201.67", color: "#10B981" },
  ];

  const pipelineData = [
    { id: 0, value: 40, label: "Entrada de Lead", color: "#7B61FF" },
    { id: 1, value: 20, label: "Contacto Realizado", color: "#5B8DEF" },
    { id: 2, value: 10, label: "Entrevista", color: "#3DD9EB" },
    { id: 3, value: 10, label: "Propuesta enviada", color: "#31C48D" },
    { id: 4, value: 10, label: "Negociación", color: "#06B6D4" },
    { id: 5, value: 5, label: "Cerrado Perdido", color: "#EF4444" },
    { id: 6, value: 5, label: "Cerrado Ganado", color: "#10B981" },
  ];

  const lossReasonsData = [
    { id: 0, value: 5, label: "Limitaciones del producto", color: "#6366F1" },
    { id: 1, value: 20, label: "Restricciones de presupuesto", color: "#F59E0B" },
    { id: 2, value: 10, label: "Precio demasiado alto", color: "#EF4444" },
    { id: 3, value: 50, label: "Mejor alternativa", color: "#3B82F6" },
    { id: 4, value: 10, label: "Falta de urgencia", color: "#10B981" },
    { id: 5, value: 5, label: "Otros", color: "#b9b010ff" },
  ];

  return (
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container size={{ md: 9 }}>
          <Grid container size={{ md: 12 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    background: stat.color,
                    color: "white",
                    textAlign: "center",
                    borderRadius: 2,
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle2">{stat.label}</Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Gráficos */}
          <Grid container size={{ md: 12 }}>
            {/* Sales Pipeline */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" mb={2}>
                  Proceso de ventas
                </Typography>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <PieChart
                    series={[
                      {
                        data: pipelineData,
                        innerRadius: 40,
                        outerRadius: 100,
                        paddingAngle: 3,
                        cornerRadius: 5,
                      },
                    ]}
                    hideLegend
                    width={350}
                    height={250}
                  />

                  {/* Leyenda abajo */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 1.5,
                    }}
                  >
                    {pipelineData.map((item) => (
                      <Box
                        key={item.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                        }}
                      >
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: item.color,
                          }}
                        />
                        <Typography variant="body2">{item.label}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>

            {/* Deal Loss Reasons */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" mb={2}>
                  Razones de pérdidas
                </Typography>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <PieChart
                    series={[
                      {
                        data: lossReasonsData,
                        innerRadius: 40,
                        outerRadius: 100,
                        paddingAngle: 3,
                        cornerRadius: 5,
                      },
                    ]}
                    hideLegend
                    width={350}
                    height={250}
                  />

                  {/* Leyenda abajo */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 1.5,
                    }}
                  >
                    {lossReasonsData.map((item) => (
                      <Box
                        key={item.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                        }}
                      >
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: item.color,
                          }}
                        />
                        <Typography variant="body2">{item.label}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Panel de IA */}
        <Grid container size={{ xs: 12, md: 3 }}>
          <Card sx={{ p: 3, height: "100%", width: "100%" }}>
            <Typography variant="h6" mb={2}>
              Análisis y sugerencias de IA
            </Typography>
            <Typography variant="body1" mb={1}>
              Aquí, la IA analizará los datos de tu dashboard y te ofrecerá sugerencias
              personalizadas para mejorar tus tasas de cierre de oportunidades.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (Por ahora, esta sección es un lugar reservado.)
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
