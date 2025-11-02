"use server";

import { cookies } from "next/headers";
import { API } from "@/consts/api";
import { myFetch } from "@/common/my-fetch";
import { Contact } from "@/types/contact.types";

export async function searchContacts(query: string): Promise<Contact[]> {
  if (!query) return [];

  const token = (await cookies()).get("access_token")?.value;
  if (!token) return [];

  try {
    const res = await myFetch<{ data: Contact[] }>(
      `${API.CONTACT.LIST}?name=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data?.data.data || [];

  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}
