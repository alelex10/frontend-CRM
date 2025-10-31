"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function OpportunityDialog({ open, onClose, data }: any) {
  if (!data) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{data.title}</DialogTitle>
      <DialogContent dividers>
        <Typography><strong>Valor:</strong> ${data.value}</Typography>
        <Typography><strong>Etapa:</strong> {data.stage}</Typography>
        <Typography><strong>Contacto:</strong> {data.contact}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>Cerrar</Button>
        <Button variant="contained" color="primary">Editar</Button>
      </DialogActions>
    </Dialog>
  );
}
