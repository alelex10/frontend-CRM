"use server";

import { cookies } from "next/headers";
import DashboardClient from "./DashboardClient";
import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Dashboard } from "@/types/dashboard.types";

//IA
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

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

  console.log(JSON.stringify(data));

  const { text } = await generateText({
    model: google('gemini-2.5-flash'),
    prompt: `
      Eres un analista experto en rendimiento de ventas.
      A continuación tienes los datos del dashboard de un usuario en formato JSON:
      
      ${JSON.stringify(data)}

      Analiza la información y responde en español con un tono profesional.

      Tu respuesta debe:
      - Incluir un resumen breve (máximo 3 frases) de los puntos clave del rendimiento.
      - Mencionar en 1 o 2 frases las áreas de mejora más relevantes.
      - Terminar con 1 sugerencia concreta para aumentar las oportunidades ganadas o cierres exitosos.

      Sé conciso (máximo 7 frases en total) y evita repetir información numérica exacta del JSON.
    `,
  });

  return <DashboardClient data={data} aiAnalysis={text} />;
}
