// src/app/dashboard/contacts/page.tsx
'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { Box, Typography, TextField, CircularProgress, Alert, Stack } from '@mui/material';
import ContactsTable from '@/common/components/tables/ContactsTable';
import myFetch from '@/common/my-fetch';

type Contact = {
  id: string;
  name: string;
  email: string;
  company?: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await myFetch('/api/contacts', { method: 'GET' });
        // Ajustá según lo que retorne tu backend
        const data = res.data ?? res;
        setContacts(data || []);
      } catch (err) {
        console.error(err);
        setError('Error al obtener los contactos');
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const filteredContacts = useMemo(() => {
    const lower = search.toLowerCase();
    return contacts
      .filter(
        (c) =>
          c.name.toLowerCase().includes(lower) ||
          c.email.toLowerCase().includes(lower) ||
          (c.company && c.company.toLowerCase().includes(lower))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, search]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Lista de contactos
      </Typography>

      <TextField
        fullWidth
        placeholder="Buscar por nombre, email o empresa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
        inputProps={{ 'data-testid': 'search-input' }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : filteredContacts.length === 0 ? (
        <Alert severity="info">No se encontraron contactos.</Alert>
      ) : (
        <Stack spacing={2}>
          <ContactsTable contacts={filteredContacts} />
        </Stack>
      )}
    </Box>
  );
}
