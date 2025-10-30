// src/common/components/forms/ContactForm.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Forms/ContactForm',
  component: ContactForm,
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, padding: 4 }}>
      <ContactForm />
    </Box>
  ),
};

export const Prefilled: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, padding: 4 }}>
      <ContactForm
        initialValues={{
          name: 'María Pérez',
          email: 'maria@example.com',
          phone: '+54 11 1234-5678',
          notes: 'Cliente VIP.',
        }}
        submitLabel="Actualizar"
      />
    </Box>
  ),
};

export const WithError: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, padding: 4 }}>
      {/* Simulamos con onError para mostrar UI en story */}
      <ContactForm
        onError={() => {
          /* noop */
        }}
      />
    </Box>
  ),
};
