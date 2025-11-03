import { API } from "@/consts/api";
import { myFetch } from "@/common/my-fetch";
import PipelineClient from "./PipelineClient";
import { cookies } from "next/headers";
import { Deal } from "@/types/opportunity.types";

export default async function PipelinePage() {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) {
    return <p>No estás autenticado</p>;
  }

  const response = await myFetch<Deal[]>(
    API.DEAL.LIST,
    { method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);

  const deals = response.data?.data;

  if (!deals) {
    return <p>Error: no se pudieron cargar los datos del dashboard.</p>;
  }

  return <PipelineClient initialDeals={deals} />;
}
