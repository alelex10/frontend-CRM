"use server";

import { cookies } from "next/headers";
import { API } from "@/consts/api";
import { myFetch } from "@/common/my-fetch";
import { ResponseTemplate } from "@/types/response";
import { Contact } from "@/types/conntac.types";

export async function searchContacts(query: string): Promise<Contact[]> {
  if (!query) return [];

  const token = (await cookies()).get("access_token")?.value;
  if (!token) return [];

  try {
    const res = await myFetch<ResponseTemplate<{ data: Contact[] }>>(
      `${API.CONTACT.LIST}?name=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    //console.log(res.data?.data.data);
    return res.data?.data.data || [];

  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}
