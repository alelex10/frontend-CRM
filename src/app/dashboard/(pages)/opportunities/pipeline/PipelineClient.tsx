"use client";

import { useState, useTransition } from "react";
import { Box, Typography } from "@mui/material";
import OpportunityCard from "./OpportunityCard";
import OpportunityDialog from "./OpportunityDialog";
import LossReasonDialog from "./LossReasonDialog";
import { STAGES } from "@/consts/opportunity";
import { Deal } from "@/types/opportunity.types";
import { updateDealStage } from "../actions/updateDealStage";
import { deleteDeal } from "../actions/deleteDeal";

export default function PipelineClient({ initialDeals }: { initialDeals: Deal[] }) {
  const [deals, setDeals] = useState(initialDeals);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [lossReasonData, setLossReasonData] = useState<{ id: number; stage: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateStage = (dealId: number, stage: string, lossReasonId?: number, lossReasonNote?: string) => {
    startTransition(async () => {
      const res = await updateDealStage(dealId, stage, lossReasonId, lossReasonNote);
      if (res) {
        setDeals(prev =>
          prev.map(d => (d.id === dealId ? { ...d, ...res } : d))
        );
      } else {
        console.error("Error: no se pudo actualizar el stage del deal");
      }
    });
  };

  const handleDelete = async (dealId: number) => {
    startTransition(async () => {
      const res = await deleteDeal(dealId);
      if (res?.data?.success) {
        setDeals(prev => prev.filter(d => d.id !== dealId));
      } else {
        console.error("No se pudo borrar el deal");
      }
    });
  };

  const onDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData("id", id.toString());
  };

  const onDrop = (e: React.DragEvent, newStage: string) => {
    const id = parseInt(e.dataTransfer.getData("id"));
    if (newStage === "Cerrado_Perdido") {
      setLossReasonData({ id, stage: newStage });
    } else {
      updateStage(id, newStage);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          paddingBottom: 2,
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: 4 },
        }}
      >
        {STAGES.map(stage => (
          <Box
            key={stage}
            onDragOver={e => e.preventDefault()}
            onDrop={e => onDrop(e, stage)}
            sx={{
              flex: "0 0 280px",
              backgroundColor: theme => theme.palette.background.paper,
              padding: 2,
              borderRadius: 2,
              minHeight: "85vh",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              {stage.replace(/_/g, " ")}
            </Typography>

            <Box sx={{ overflowY: "auto", flex: 1, pr: 1 }}>
              {deals
                .filter(d => d.stage === stage)
                .map(d => (
                  <OpportunityCard
                    key={d.id}
                    data={d}
                    onDragStart={onDragStart}
                    onClick={() => setSelectedDeal(d)}
                  />
                ))}
            </Box>
          </Box>
        ))}
      </Box>

      {selectedDeal && (
        <OpportunityDialog
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
          onDelete={() => handleDelete(selectedDeal.id)}
        />
      )}

      {lossReasonData && (
        <LossReasonDialog
          open={!!lossReasonData}
          onClose={() => setLossReasonData(null)}
          onConfirm={(reasonId: number, note: string) => {
            updateStage(lossReasonData.id, lossReasonData.stage, reasonId, note);
            setLossReasonData(null);
          }}
        />
      )}
    </>
  );
}
