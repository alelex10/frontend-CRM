import { ResponseError, ResponseTemplate } from "@/types/response";
import { error } from "console";

interface Stats<T> {
  data: undefined | ResponseTemplate<T>;
  error: undefined | ResponseError;
}

export async function myFetch<T>(
  url: string,
  options: RequestInit
): Promise<Stats<T>> {
  let stats: Stats<T> = { data: undefined, error: undefined };
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      try {
        stats.error = await response.json() as ResponseError;
        return stats;
      } catch (error) {
        console.log("ERROR DE PETICON:", error);
        stats.error = {
          message: "Ocurrió un error inesperado",
          error: "Ocurrió un error inesperado",
          statusCode: response.status,
        };
        return stats;
      }
    }

    const responseJson = await response.json();

    stats.data = responseJson as ResponseTemplate<T>;
    return stats;
  } catch (error: any) {
    console.error(error);
    return stats;
  }
}
