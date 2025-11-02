"use server";

import { cookies } from "next/headers";
import { API } from "@/consts/api";
import OpportunityForm from "../../create/OpportunityForm";
import { Deal } from "@/types/opportunity.types";
import { myFetch } from "@/common/my-fetch";

export default async function EditOpportunityPage({ params }: { params: Promise<{ dealId: string }> }) {
  const { dealId } = await params;

  const token = (await cookies()).get("access_token")?.value;
  if (!token) return <p>No estás autenticado</p>;

  //try {
    const res = await myFetch<Deal>(`${API.DEAL.LIST}/${dealId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (res.error) return <p>Error cargando la oportunidad</p>;

    return <OpportunityForm initial={res.data?.data} mode="edit" />;
  /*} catch (err) {
    console.error(err);
    return <p>Error cargando la oportunidad</p>;
  }*/
}
