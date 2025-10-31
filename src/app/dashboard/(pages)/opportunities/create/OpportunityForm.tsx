"use client";

import { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const stages = [
    "Entrada de Lead",
    "Contacto Realizado",
    "Entrevista",
    "Propuesta Enviada",
    "Negociacion",
    "Cerrado Perdido",
    "Cerrado Ganado",
  ];

export default function OpportunityForm() {
  const [form, setForm] = useState({ title: "", value: "", stage: "", contact: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Nueva oportunidad:", form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mt: 2 }}>
      <TextField
        label="Título"
        name="title"
        fullWidth
        margin="normal"
        value={form.title}
        onChange={handleChange}
      />
      <TextField
        label="Valor"
        name="value"
        type="number"
        fullWidth
        margin="normal"
        value={form.value}
        onChange={handleChange}
      />
      <TextField
        select
        label="Etapa"
        name="stage"
        fullWidth
        margin="normal"
        value={form.stage}
        onChange={handleChange}
      >
        {stages.map(s => (
          <MenuItem key={s} value={s}>{s}</MenuItem>
        ))}
      </TextField>
      <TextField
        label="Contacto"
        name="contact"
        fullWidth
        margin="normal"
        value={form.contact}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Crear
      </Button>
    </Box>
  );
}
