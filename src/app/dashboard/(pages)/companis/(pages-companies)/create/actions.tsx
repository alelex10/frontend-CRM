"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { LoginResponse } from "@/types/auth";
import { CreateCompani } from "@/types/compani.types";
import { ResponseError, ResponseTemplate } from "@/types/response";
import { cookies } from "next/headers";

interface createCompanyProps {
  createData: CreateCompani
}

export async function createCompany({ createData }: createCompanyProps) {
  // console.log(createData)
  const response = await myFetch<CreateCompani>(
    API.COMPANI.CREATE,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createData),
    }
  );

  console.log(response);

  return response;
}
