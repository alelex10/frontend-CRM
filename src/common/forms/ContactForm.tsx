// src/common/components/forms/ContactForm.tsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  Stack,
  CircularProgress,
} from '@mui/material';
import type { ChangeEvent, FormEvent } from 'react';
import myFetch from '../../my-fetch'; // desde src/common/components/forms -> ../../my-fetch

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  notes?: string;
};

type Props = {
  initialValues?: Partial<ContactPayload>;
  onSuccess?: (created: any) => void;
  onError?: (err: unknown) => void;
  submitLabel?: string;
  disabled?: boolean;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({
  initialValues = {},
  onSuccess,
  onError,
  submitLabel = 'Guardar',
  disabled = false,
}: Props) {
  const [name, setName] = useState(initialValues.name ?? '');
  const [email, setEmail] = useState(initialValues.email ?? '');
  const [phone, setPhone] = useState(initialValues.phone ?? '');
  const [notes, setNotes] = useState(initialValues.notes ?? '');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [touched, setTouched] = useState({ name: false, email: false });

  function validate(): { valid: boolean; errors: { name?: string; email?: string } } {
    const errors: { name?: string; email?: string } = {};
    if (!name.trim()) errors.name = 'El nombre es obligatorio';
    if (!email.trim()) errors.email = 'El email es obligatorio';
    else if (!emailRegex.test(email)) errors.email = 'El email no es válido';
    return { valid: Object.keys(errors).length === 0, errors };
  }

  const handleChange =
    (setter: (v: string) => void) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  const handleBlur = (field: 'name' | 'email') => () =>
    setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const { valid, errors } = validate();
    if (!valid) {
      setErrorMsg(Object.values(errors).join(' — '));
      return;
    }

    const payload: ContactPayload = { name: name.trim(), email: email.trim(), phone: phone.trim(), notes: notes.trim() };

    try {
      setLoading(true);
      // Ajustá la ruta si tu API la expone en otro endpoint
      const res = await myFetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Se asume que myFetch devuelve un objeto con ok o lanza en caso de error.
      // Si tu myFetch retorna { ok: boolean, data }, adaptá según tu caso.
      if ((res && (res.ok === false || res.status >= 400)) || (res && (res.ok === undefined && res.status && res.status >= 400))) {
        // caso respuesta con error
        const msg = (res && (res.message || res.error)) || 'Error al crear el contacto';
        throw new Error(String(msg));
      }

      // Éxito
      setSuccessMsg('Contacto creado correctamente');
      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
      onSuccess?.(res);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al crear contacto';
      setErrorMsg(message);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  const { errors } = validate();

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate aria-label="contact-form">
      <Stack spacing={2}>
        {errorMsg && <Alert severity="error" data-testid="form-error">{errorMsg}</Alert>}
        {successMsg && <Alert severity="success" data-testid="form-success">{successMsg}</Alert>}

        <TextField
          label="Nombre"
          value={name}
          onChange={handleChange(setName)}
          onBlur={handleBlur('name')}
          required
          error={!!(touched.name && errors.name)}
          helperText={touched.name && errors.name ? errors.name : ''}
          inputProps={{ 'data-testid': 'input-name' }}
        />

        <TextField
          label="Email"
          value={email}
          onChange={handleChange(setEmail)}
          onBlur={handleBlur('email')}
          required
          error={!!(touched.email && errors.email)}
          helperText={touched.email && errors.email ? errors.email : ''}
          inputProps={{ 'data-testid': 'input-email' }}
        />

        <TextField
          label="Teléfono"
          value={phone}
          onChange={handleChange(setPhone)}
          inputProps={{ 'data-testid': 'input-phone' }}
        />

        <TextField
          label="Notas"
          value={notes}
          onChange={handleChange(setNotes)}
          multiline
          rows={3}
          inputProps={{ 'data-testid': 'input-notes' }}
        />

        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            disabled={loading || disabled}
            data-testid="submit-button"
            startIcon={loading ? <CircularProgress size={16} /> : undefined}
          >
            {loading ? 'Guardando...' : submitLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
