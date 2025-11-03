"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { cookies } from "next/headers";

export async function deleteDeal(dealId: number) {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) throw new Error("No token found");

  try {
    const res = await myFetch(`${API.DEAL.DELETE}/${dealId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.error("Error al borrar el deal:", error);
    return null;
  }
}
