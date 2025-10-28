"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani } from "@/types/compani.types";
import { ResponsePaginated } from "@/types/response";
import { cookies } from "next/headers";

type orderBy = "name" | "createdAt" | "updatedAt" | "id";

interface CompanyQuery {
  page?: number;
  limit?: number;
  search?: string;
  orderBy?: orderBy;
  order?: "asc" | "desc";
}

interface CompaniProps {
  query?: CompanyQuery;
}

export async function companyList({
  query,
}: CompaniProps): Promise<ResponseMyFetch<ResponsePaginated<Compani[]>>> {
  // console.log("token", (await cookies()).get("access_token"))
  const page = `page=${query?.page ?? 1}`;
  const limit = `limit=${query?.limit ?? 10}`;
  const search = `search=${query?.search ?? ""}`;
  const orderBy: orderBy= query?.orderBy ?? "name";
  const order = `order=${ query?.order ?? "asc"}`;

  const response = await myFetch<ResponsePaginated<Compani[]>>(
    API.COMPANI.LIST + `?${page}&${limit}&${search}&${orderBy}&${order}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
        "Content-Type": "application/json",
      },
    } 
  );

  console.log(response);

  return response;
  // if (response?.data) {
  //   return response.data;
  // }
  // return response.error;
}
