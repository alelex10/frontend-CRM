"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { LoginResponse } from "@/types/auth";
import { CreateCompani } from "@/types/compani.types";
import { cookies } from "next/headers";

interface createCompanyProps {
  createData: CreateCompani
}

export async function createCompany({ createData }: createCompanyProps) {
  // console.log(createData)
  const response = await myFetch<LoginResponse>(
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
