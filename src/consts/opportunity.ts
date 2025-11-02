export const STAGES = [
  "Entrada_de_Lead",
  "Contacto_Establecido",
  "Descubrimiento",
  "Propuesta",
  "Negociacion",
  "Cerrado_Ganado",
  "Cerrado_Perdido",
] as const;

export type Stage = typeof STAGES[number];

export const LOSS_REASONS = [
  { id: 1, label: "Limitaciones del producto" },
  { id: 2, label: "Restricciones de presupuesto" },
  { id: 3, label: "Precio demasiado alto" },
  { id: 4, label: "Mejor alternativo" },
  { id: 5, label: "Falta de urgencia" },
  { id: 6, label: "Otro" },
] as const;
