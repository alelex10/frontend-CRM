"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani } from "@/types/compani.types";

interface CompanyQuery {
  page: number;
  limit: number;
  search: string;
  orderBy: string;
}

interface CompaniProps {
  query: CompanyQuery;
}

export async function companyList({
  query,
}: CompaniProps): Promise<ResponseMyFetch<Compani[]>> {
  
  const response = await myFetch<Compani[]>(
    API.COMPANI.LIST +
      `?page=${query.page}` +
      `&limit=${query.limit}` +
      `&search=${query.search}` +
      `&orderBy=${query.orderBy}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
  // if (response?.data) {
  //   return response.data;
  // }
  // return response.error;
}
