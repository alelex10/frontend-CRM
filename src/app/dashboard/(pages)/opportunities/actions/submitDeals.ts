"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { cookies } from "next/headers";

export async function submitOpportunity(data: {
  mode: "create" | "edit";
  payload: {
    title?: string;
    value?: number;
    stage?: string;
    contactId?: number;
  };
  dealId?: number;
}) {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) throw new Error("No token found");
  const { mode, payload, dealId } = data;
  const method = mode === "create" ? "POST" : "PUT";
  const url = mode === "create" ? API.DEAL.CREATE : `${API.DEAL.UPDATE}/${dealId}`;

  const res = await myFetch(url, {
    method,
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res;
}
