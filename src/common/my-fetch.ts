import { ResponseError, ResponseTemplate } from "@/types/response";
import { error } from "console";

export interface ResponseMyFetch<T> {
  data: undefined | ResponseTemplate<T>;
  error: undefined | ResponseError;
}

export async function myFetch<T>(
  url: string,
  options: RequestInit
): Promise<ResponseMyFetch<T>> {
  let stats: ResponseMyFetch<T> = { data: undefined, error: undefined };
  console.log(url)
  try {
    const response = await fetch(url, {
      
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
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
    // console.error(error);
    stats.error = {
      message: "Ocurrió un error inesperado",
      error: "Ocurrió un error inesperado",
      statusCode: 500,
    };
    return stats;
  }
}
