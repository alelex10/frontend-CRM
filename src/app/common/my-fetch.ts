import { ResponseError, ResponseTemplate } from "@/types/response";
import { error } from "console";

interface Stats<T> {
  data: undefined | ResponseTemplate<T>;
  error: undefined | string;
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

    const responseJson = await response.json();

    console.log("RESPONSE JSON:", responseJson);

    if (!responseJson.ok) {
      try {
        stats.error = responseJson.message;
        return stats;
      } catch (error) {
        console.log("ERROR DE PETICON:", error);
        stats.error = "Error Inesperado";
        return stats;
      }
    }

    stats.data = responseJson;
    return stats;
  } catch (error: any) {
    console.error(error);
    return stats;
  }
}
