import { Contact } from "./contact.types";

export interface Note {
  id: number;
  title: string;
  description: string;
  contactId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface UpdatedNote {
  message: string;
  note: Note;
}

export interface ContactWithNotes extends Contact {
  notes: Note[];
  company: {
    name: string;
  };
}