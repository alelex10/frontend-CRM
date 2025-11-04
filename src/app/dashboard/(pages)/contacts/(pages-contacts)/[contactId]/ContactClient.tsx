"use client";

import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ContactWithNotes } from "@/types/note.types";
import { Note } from "@/types/note.types";
import { deleteNote, updateNote, createNote } from "./actions";
import NotesModal from "./NotesModal";

interface Props {
  data: ContactWithNotes;
}

export default function ContactClient({ data }: Props) {
  const [contact, setContact] = useState<ContactWithNotes>(data);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleDeleteNote = async (noteId: number) => {
    await deleteNote(noteId);
    setContact((prev) => prev && {
      ...prev,
      notes: prev.notes.filter(n => n.id !== noteId)
    });
  };

  const handleSaveNote = async (noteData: { title: string; description: string }) => {
    if (editingNote) {
        const updatedNote = await updateNote(editingNote.id, noteData);
        if (!updatedNote) return;

        setContact((prev) =>
        prev
            ? { ...prev, notes: (prev.notes || []).map(n => n.id === updatedNote.id ? updatedNote : n) }
            : prev
        );
    } else {
      // Crear nueva nota
      const newNote = await createNote(contact.id, noteData);
      if (!newNote) return;

      setContact((prev) => prev && ({
        ...prev,
        notes: [newNote, ...prev.notes]
      }));
    }

    setEditingNote(null);
    setIsModalOpen(false);
  };

  return (
    <Box p={1}>
      <Box
        sx={{
          backgroundColor: theme => theme.palette.background.paper,
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" mb={2}><strong>{contact.name}</strong></Typography>
        <Typography> <strong>Email:</strong> {contact.email}</Typography>
        <Typography> <strong>Teléfono:</strong> {contact.phone}</Typography>
        <Typography> <strong>Compañía:</strong> {contact.company?.name || "Ninguna"}</Typography>
        <Typography> <strong>Creado:</strong> {new Date(contact.createdAt).toLocaleString()}</Typography>
      </Box>

      <Box mt={2}
        sx={{
          flex: "0 0 280px",
          backgroundColor: theme => theme.palette.background.paper,
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Notas</Typography>
        <Stack spacing={2} mt={1}>
          {contact.notes
            ?.slice()
            .sort((a, b) => b.id - a.id)
            .map(note => (
              <Box key={note.id} p={2} border="1px solid #ccc" borderRadius={1}>
                <Typography variant="h6" fontWeight="bold" mb={1}>{note.title}</Typography>
                <Typography variant="subtitle1">{note.description}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{new Date(note.createdAt).toLocaleString()}</Typography>
                <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: 1,
                    }}
                >
                  <Button variant="contained" size="small" onClick={() => handleEditNote(note)}>Editar</Button>
                  <Button variant="contained" size="small" color="error" onClick={() => handleDeleteNote(note.id)}>Borrar</Button>
                </Box>
              </Box>
            ))
          }
        </Stack>
        <Button variant="contained" sx={{ mt: 2, width: "fit-content" }} onClick={() => setIsModalOpen(true)}>
          Crear nota
        </Button>
      </Box>

      {isModalOpen && (
        <NotesModal
          note={editingNote}
          onClose={() => { setEditingNote(null); setIsModalOpen(false); }}
          onSave={handleSaveNote}
        />
      )}
    </Box>
  );
}
