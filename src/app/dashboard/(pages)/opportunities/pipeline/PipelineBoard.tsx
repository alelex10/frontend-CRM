"use client";

import { useState } from "react";
import OpportunityCard from "./OpportunityCard";
import { Box, Typography } from "@mui/material";

const initialData = {
  stages: [
    "Entrada de Lead",
    "Contacto Realizado",
    "Entrevista",
    "Propuesta Enviada",
    "Negociacion",
    "Cerrado Perdido",
    "Cerrado Ganado",
  ],
  opportunities: [
    { id: 1, title: "Actualización de hardware", value: 1500, stage: "Entrada de Lead", contact: "Carlos Pérez" },
    { id: 2, title: "Renovación de contrato de soporte técnico anual", value: 12500, stage: "Entrevista", contact: "María López" },
    { id: 3, title: "Capacitación para equipos remotos", value: 3800, stage: "Negociacion", contact: "Juan Torres" },
    { id: 4, title: "Campaña publicitaria para lanzamiento de producto", value: 4200, stage: "Propuesta Enviada", contact: "Pedro Sánchez" },
    { id: 5, title: "Capacitación para equipos remotos", value: 3800, stage: "Negociacion", contact: "Juan Torres" },
    { id: 6, title: "Campaña publicitaria para lanzamiento de producto", value: 4200, stage: "Propuesta Enviada", contact: "Pedro Sánchez" },
    { id: 7, title: "Capacitación para equipos remotos", value: 3800, stage: "Negociacion", contact: "Juan Torres" },
  ],
};

export default function PipelineBoard() {
  const [data, setData] = useState(initialData);

  const onDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData("id", id.toString());
  };

  const onDrop = (e: React.DragEvent, newStage: string) => {
    const id = parseInt(e.dataTransfer.getData("id"));
    setData(prev => ({
      ...prev,
      opportunities: prev.opportunities.map(o =>
        o.id === id ? { ...o, stage: newStage } : o
      ),
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        paddingBottom: 2,
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": { height: 8 },
        "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: 4 },
      }}
    >
      {data.stages.map(stage => (
        <Box
          key={stage}
          onDragOver={e => e.preventDefault()}
          onDrop={e => onDrop(e, stage)}
          sx={{
            flex: "0 0 280px", // ancho fijo de cada columna
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: 2,
            borderRadius: 2,
            maxHeight: "70vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            {stage}
          </Typography>

          <Box
            sx={{
              overflowY: "auto",
              flex: 1,
              pr: 1,
              "&::-webkit-scrollbar": { width: 6 },
              "&::-webkit-scrollbar-thumb": { background: "#bbb", borderRadius: 4 },
            }}
          >
            {data.opportunities
              .filter(o => o.stage === stage)
              .map(o => (
                <OpportunityCard key={o.id} data={o} onDragStart={onDragStart} />
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
