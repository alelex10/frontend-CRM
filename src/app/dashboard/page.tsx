//import { cookies } from "next/headers";
//import type { request } from "next/server";
import type { NextRequest } from "next/server";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage(request: NextRequest) {
  // ✅ Leer cookie del request (lado servidor)
  //const token = cookies().get("token")?.value;
  /*const token = request.cookies.get("access_token");

  if (!token) {
    return <p>No estás autenticado</p>;
  }

  // ✅ Pedir datos al backend con ese token
  const res = await fetch(`${process.env.API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Error al cargar el dashboard</p>;
  }

  const data = await res.json();*/

  return <DashboardClient /*data={data}*/ />;
}

