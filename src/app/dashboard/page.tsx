"use server";

import { cookies } from "next/headers";
import DashboardClient from "./DashboardClient";
import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Dashboard } from "@/types/dashboard.types";

export default async function DashboardPage() {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    return <p>No estás autenticado</p>;
  }
  
  const response = await myFetch<Dashboard>(
    API.DASHBOARD,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
        "Content-Type": "application/json",
      },
    }
  );
  
  const data = response.data?.data;

  if (!data) {
    return <p>Error: no se pudieron cargar los datos del dashboard.</p>;
  }

  return <DashboardClient data={data} />;
}
