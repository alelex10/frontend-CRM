/*export interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  position?: string;
}*/

import { Contact } from "./conntac.types";

export interface LossReason {
  id: number;
  label: string;
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
