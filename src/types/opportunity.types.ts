import { Contact } from "./contact.types";

export interface LossReason {
  id: number;
  name: string;
}

export interface Deal {
  id: number;
  title: string;
  value: number;
  stage: string;
  contactId?: number;
  contact?: Contact;
  lossReasonId?: number | null;
  lossReasonNote?: string | null;
  lossReason?: LossReason | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateDealPayload {
  stage: string;
  lossReasonId?: number;
  lossReasonNote?: string;
};
