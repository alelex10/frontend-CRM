"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { Deal } from "@/types/opportunity.types";

interface OpportunityCardProps {
  data: Deal;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  onClick: () => void;
}


export default function OpportunityCard({ data, onDragStart, onClick }: OpportunityCardProps) {
  return (
    <Card
      draggable
      onDragStart={e => onDragStart(e, data.id)}
      onClick={onClick}
      sx={{
        mb: 2,
        backgroundColor: (theme) => theme.palette.background.default,
        cursor: "grab",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Valor: ${data.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
