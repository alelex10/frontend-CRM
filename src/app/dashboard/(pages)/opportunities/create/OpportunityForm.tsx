"use client";

import { useState, useEffect, useTransition, ChangeEvent, FormEvent } from "react";
import { TextField, Button, MenuItem, Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { STAGES } from "@/consts/opportunity";
import { searchContacts } from "../actions/searchContacts";
import { submitOpportunity } from "../actions/submitDeals";
import { Contact } from "@/types/contact.types";
import { Deal } from "@/types/opportunity.types";

interface OpportunityFormProps {
  initial?: Partial<Deal>;
  mode?: "create" | "edit";
}

export default function OpportunityForm({ initial = {}, mode = "create" }: OpportunityFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initial.title || "",
    value: initial.value || "",
    stage: initial.stage || "",
    contactId: initial.contactId || "",
  });

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [showResults, setShowResults] = useState(false);

  // Buscar contactos
  useEffect(() => {
    if (!query || form.contactId) {
      setContacts([]);
      setShowResults(false);
      return;
    }

    const timer = setTimeout(() => {
      startTransition(async () => {
        setLoadingContacts(true);
        const results = await searchContacts(query);
        setContacts(results);
        setShowResults(true);
        setLoadingContacts(false);
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [query, form.contactId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (form.contactId) {
      setForm(prev => ({ ...prev, contactId: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      title: form.title || undefined,
      value: form.value ? Number(form.value) : undefined,
      stage: form.stage || undefined,
      contactId: form.contactId ? Number(form.contactId) : undefined,
    };

    startTransition(async () => {
      await submitOpportunity({
        mode,
        payload,
        dealId: initial.id,
      });

      router.push("/dashboard/opportunities/pipeline");
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        //mt: 2,
        p: 4,
        position: "relative",
        mx: "auto",
        borderRadius: 1,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {mode === "create" ? "Crear " : "Editar "} Oportunidad
      </Typography>
      <TextField
        label="Título"
        name="title"
        fullWidth
        margin="normal"
        value={form.title}
        onChange={handleInputChange}
        required={mode === "create"}
      />
      <TextField
        label="Valor"
        name="value"
        type="number"
        fullWidth
        margin="normal"
        value={form.value}
        onChange={handleInputChange}
        required={mode === "create"}
      />
      <TextField
        select
        label="Etapa"
        name="stage"
        fullWidth
        margin="normal"
        value={form.stage}
        onChange={handleInputChange}
        required={mode === "create"}
      >
        {STAGES.map((s) => (
          <MenuItem key={s} value={s}>
            {s.replace(/_/g, " ")}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Buscar contacto"
        fullWidth
        margin="normal"
        sx={{ mb: 0 }}
        value={form.contactId ? contacts.find(c => c.id === form.contactId)?.name || query : query}
        onChange={handleContactQueryChange}
        placeholder="Escribe para buscar..."
      />

      {loadingContacts || isPending ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <CircularProgress />
        </Box>
      ) : showResults && contacts.length > 0 ? (
        <Box
          sx={{
            maxHeight: 200,
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 1,
          }}
        >
          {contacts.map((c) => (
            <Box
              key={c.id}
              sx={{
                p: 1,
                cursor: "pointer",
                "&:hover": { backgroundColor: (theme) => theme.palette.action.hover },
                backgroundColor: form.contactId === c.id ? "#e0f7fa" : "transparent",
              }}
              onClick={() => {
                setForm(prev => ({ ...prev, contactId: c.id }));
                setQuery(c.name);
                setShowResults(false);
              }}
            >
              {c.name}
            </Box>
          ))}
        </Box>
      ) : null}

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, width: "100%" }}>
        {mode === "create" ? "Crear" : "Guardar cambios"}
      </Button>
    </Box>
  );
}
