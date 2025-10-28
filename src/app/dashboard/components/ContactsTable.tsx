import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, Typography } from '@mui/material';

type Contact = {
  id: string;
  name: string;
  email: string;
  company?: string;
};

type Props = {
  contacts: Contact[];
};

export default function ContactsTable({ contacts }: Props) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table size="small" aria-label="tabla de contactos">
        <TableHead>
          <TableRow>
            <TableCell><Typography fontWeight="bold">Nombre</Typography></TableCell>
            <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
            <TableCell><Typography fontWeight="bold">Empresa</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{c.company ?? '—'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
