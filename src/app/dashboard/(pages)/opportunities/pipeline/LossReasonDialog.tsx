"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const LOSS_REASONS = [
  { id: 1, label: "Limitaciones del producto" },
  { id: 2, label: "Restricciones de presupuesto" },
  { id: 3, label: "Precio demasiado alto" },
  { id: 4, label: "Mejor alternativo" },
  { id: 5, label: "Falta de urgencia" },
  { id: 6, label: "Otro" },
];

export default function LossReasonDialog({ open, onClose, onConfirm }: any) {
  const [reasonId, setReasonId] = useState("");
  const [note, setNote] = useState("");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Razón de Pérdida</DialogTitle>
      <DialogContent dividers>
        <TextField
          select
          fullWidth
          label="Razón"
          margin="normal"
          value={reasonId}
          onChange={e => setReasonId(e.target.value)}
          required
        >
          {LOSS_REASONS.map(r => (
            <MenuItem key={r.id} value={r.id}>
              {r.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Nota (opcional)"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          onClick={() => {
            onConfirm(Number(reasonId), note);
          }}
          disabled={!reasonId}
          variant="contained"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
