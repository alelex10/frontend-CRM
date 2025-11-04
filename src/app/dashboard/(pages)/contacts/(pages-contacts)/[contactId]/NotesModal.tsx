"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Note } from "@/types/note.types";

interface Props {
  note: Note | null;
  onClose: () => void;
  onSave: (data: { title: string; description: string }) => void;
}

export default function NotesModal({ note, onClose, onSave }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [note]);

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{note ? "Editar nota" : "Crear nota"}</DialogTitle>
      <DialogContent>
        <TextField label="Título" fullWidth value={title} onChange={e => setTitle(e.target.value)} margin="dense" />
        <TextField label="Descripción" fullWidth multiline minRows={3} value={description} onChange={e => setDescription(e.target.value)} margin="dense" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
        <Button variant="contained" onClick={() => onSave({ title, description })}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
}
