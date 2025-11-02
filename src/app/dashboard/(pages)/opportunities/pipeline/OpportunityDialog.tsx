"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function OpportunityDialog({ deal, onClose, onDelete }: any) {
  const router = useRouter();

  const handleEdit = () => {
    //router.push(`./dashboard/opportunities/${deal.id}/edit`);
    router.push(`./${deal.id}/edit`);
  };

  const handleDelete = async () => {
    await onDelete(deal.id);
    onClose();
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Detalles de la Oportunidad</DialogTitle>
      <DialogContent dividers>
        <Typography><strong>Título:</strong> {deal.title}</Typography>
        <Typography><strong>Valor:</strong> ${deal.value}</Typography>
        <Typography><strong>Etapa:</strong> {deal.stage.replace(/_/g, " ")}</Typography>
        <Typography><strong>Contacto:</strong> {deal.contact?.name || "—"}</Typography>
        {deal.lossReasonId && (
          <>
            <Typography sx={{ mt: 1 }}>
              <strong>Razón de Pérdida:</strong> {deal.lossReason?.name || deal.lossReasonId}
            </Typography>
            {deal.lossReasonNote && (
              <Typography><strong>Nota:</strong> {deal.lossReasonNote}</Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEdit}>Editar</Button>
        <Button color="error" onClick={handleDelete}>Borrar</Button>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}
