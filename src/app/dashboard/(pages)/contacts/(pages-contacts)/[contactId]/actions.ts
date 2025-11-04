"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { cookies } from "next/headers";
import { UpdatedNote } from "@/types/note.types";
import { Note } from "@/types/note.types";

async function getToken() {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    throw new Error("No token found");
  }

  return token;
}

export async function updateNote(noteId: number, data: { title: string; description: string }) {
  const token = await getToken();

  const res = await myFetch<UpdatedNote>(`${API.NOTE.UPDATE}/${noteId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });

  //console.log(res.data?.data.note);
  return res.data?.data.note;
}

export async function deleteNote(noteId: number) {
  const token = await getToken();

  await myFetch(`${API.NOTE.DELETE}/${noteId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function createNote(contactId: number, data: { title: string; description: string; }) {
  const token = await getToken();

  const res = await myFetch<Note>(`${API.NOTE.CREATE}/${contactId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });

  //console.log(res.data?.data);
  return res.data?.data;
}
