"use server";

import { cookies } from "next/headers";
import { API } from "@/consts/api";
import { ContactWithNotes } from "@/types/note.types";
import { myFetch } from "@/common/my-fetch";
import ContactClient from "./ContactClient";

export default async function OneContactPage({ params }: { params: Promise<{ contactId: string }> }) {
  const { contactId } = await params;

  const token = (await cookies()).get("access_token")?.value;
  if (!token) return <p>No estás autenticado</p>;

  const res = await myFetch<ContactWithNotes>(`${API.CONTACT.LIST}/${contactId}`, {
    method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

  const contact = res.data?.data;

  if (!contact) {
    return <p>Error: no se pudieron cargar los datos del dashboard.</p>;
  }

  console.log(contact);

  return <ContactClient data={contact} />;
}
