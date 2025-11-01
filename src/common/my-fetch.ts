import { ResponseError, ResponseTemplate } from "@/types/response";

export interface ResponseMyFetch<T> {
  data: undefined | ResponseTemplate<T>;
  error: undefined | ResponseError;
}

export async function myFetch<T>(
  url: string,
  options: RequestInit
): Promise<ResponseMyFetch<T>> {

  const stats: ResponseMyFetch<T> = { data: undefined, error: undefined };
  console.log(url)
  // console.log(options.body)
  try {
    const response = await fetch(url, {
      ...options,
    });

    if (!response.ok) {
      try {
        stats.error = await response.json() as ResponseError;
        return stats;
      } catch (error) {
        console.log("ERROR DE PETICION:", error);
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
  } catch (error) {
    // console.error(error);
    console.log(error)
    stats.error = {
      message: "Ocurrió un error inesperado",
      error: "Ocurrió un error inesperado", // TODO: cambiar esto por un mensaje de error
      statusCode: 500,
    };
    return stats;
  }
}
