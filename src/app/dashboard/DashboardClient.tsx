"use client";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { Dashboard } from "@/types/dashboard.types";

export default function DashboardClient({ data }: { data: Dashboard }) {

  // 👉 Función para formatear números grandes
  const formatNumber = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  const stats = [
    { label: "Valor de ventas totales", value: formatNumber(data.totalSales), color: "#7B61FF" },
    { label: "Tasa de ventas", value: `${data.winRate}%`, color: "#5B8DEF" },
    { label: "Tasa de cierre", value: `${data.closeRate}%`, color: "#3DD9EB" },
    { label: "Días promedio para cerrar", value: data.avgDaysToClose, color: "#31C48D" },
    { label: "Valor de las oportunidades", value: formatNumber(data.pipelineValue), color: "#4F46E5" },
    { label: "Oportunidades abiertas", value: data.openDeals, color: "#3B82F6" },
    { label: "Valor promedio de venta", value: formatNumber(data.avgDealSize), color: "#06B6D4" },
    { label: "Edad prom. de oportunidades", value: data.avgOpenDealAge.toFixed(1), color: "#10B981" },
  ];

  const pipelineData = data.salesPipeline
  .filter((item) => item.percentage && item.percentage > 0)
  .map((item, index) => ({
    id: index,
    value: item.percentage,
    label: item.stage.replace(/_/g, " "),
    color: ["#7B61FF", "#5B8DEF", "#3DD9EB", "#31C48D", "#06B6D4", "#10B981", "#EF4444"][index],
  }));

const lossReasonsData = data.dealLossReasons
  .filter((item) => item.percentage && item.percentage > 0)
  .map((item, index) => ({
    id: index,
    value: item.percentage,
    label: item.reason,
    color: ["#6366F1", "#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#b9b010ff"][index],
  }));


  const hasPipelineData = pipelineData.some((item) => item.value > 0);
  const hasLossData = lossReasonsData.some((item) => item.value > 0);

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
                    //height: "100%",
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
                  Proceso de ventas (%)
                </Typography>

                {hasPipelineData ? (
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

                    {/* Leyenda */}
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
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 4 }}
                  >
                    No hay oportunidades creadas.
                  </Typography>
                )}
              </Card>
            </Grid>

            {/* Deal Loss Reasons */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" mb={2}>
                  Razones de pérdidas (%)
                </Typography>

                {hasLossData ? (
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

                    {/* Leyenda */}
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
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 4 }}
                  >
                    No hubo oportunidades perdidas.
                  </Typography>
                )}
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
