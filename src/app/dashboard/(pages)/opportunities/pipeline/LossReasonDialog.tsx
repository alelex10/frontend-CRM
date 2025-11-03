"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import { LOSS_REASONS } from "@/consts/opportunity";

interface LossReasonDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (reasonId: number, note: string) => void;
}

export default function LossReasonDialog({ open, onClose, onConfirm }: LossReasonDialogProps) {
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
