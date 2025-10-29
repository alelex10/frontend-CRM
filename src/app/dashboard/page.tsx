"use server";

import { cookies } from "next/headers";
import DashboardClient from "./DashboardClient";
import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { ResponseTemplate } from "@/types/response";
import { Dashboard } from "@/types/dashboard.types";

export default async function DashboardPage() {
  const token = (await cookies()).get("access_token")?.value;

  //console.log("TOKEN MAGICO: ",token);

  if (!token) {
    return <p>No estás autenticado</p>;
  }

  // MiContraseñaSegura123
  
  const response = await myFetch<ResponseTemplate<Dashboard>>(
    API.DASHBOARD,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
        "Content-Type": "application/json",
      },
    }
  );
  

  //console.log(response);
  const data = response.data?.data;
  //console.log(data);

  if (!data) {
    return <p>Error: no se pudieron cargar los datos del dashboard.</p>;
  }

  return <DashboardClient data={data} />;
}

