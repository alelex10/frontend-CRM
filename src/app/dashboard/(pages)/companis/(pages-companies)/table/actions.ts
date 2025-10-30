"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani } from "@/types/compani.types";
import { Contact } from "@/types/conntac.types";
import { ResponsePaginated } from "@/types/response";
import { cookies } from "next/headers";

type orderBy = keyof Compani | keyof Contact;
export type dataTypeList = Compani[] | Contact[];

export interface SortFilter {
  page?: number;
  limit?: number;
  search?: string;
  orderBy?: orderBy;
  order?: "asc" | "desc";
}

export interface CompaniFetchProps {
  query?: SortFilter;
  type?: "companies" | "contacts";
}

export async function fetchDataList({
  query,
  type,
}: CompaniFetchProps): Promise<
  ResponseMyFetch<ResponsePaginated<dataTypeList>>
> {
  // console.log("token", (await cookies()).get("access_token"))
  const URL = {
    companies: API.COMPANI.LIST,
    contacts: API.CONTACT.LIST,
  }[type ?? "companies"];

  const page = `page=${(query?.page ?? 1) + 1}`;
  const limit = `limit=${query?.limit ?? 10}`;
  const search = `search=${query?.search ?? ""}`;
  const orderBy = `orderBy=${query?.orderBy ?? "id"}`;
  const order = `order=${query?.order ?? "desc"}`;

  const response = await myFetch<ResponsePaginated<dataTypeList>>(
    URL + `?${page}&${limit}&${search}&${orderBy}&${order}`,
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
}
