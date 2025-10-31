"use client";

import { Card, CardContent, Typography } from "@mui/material";
import OpportunityDialog from "./OpportunityDialog";
import { useState } from "react";

export default function OpportunityCard({ data, onDragStart }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        draggable
        onDragStart={e => onDragStart(e, data.id)}
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          mb: 2,
          cursor: "pointer",
          ":hover": { boxShadow: 4 },
        }}
      >
        <CardContent>
          <Typography variant="subtitle1">{data.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Valor: ${data.value}
          </Typography>
        </CardContent>
      </Card>

      <OpportunityDialog open={open} onClose={() => setOpen(false)} data={data} />
    </>
  );
}
