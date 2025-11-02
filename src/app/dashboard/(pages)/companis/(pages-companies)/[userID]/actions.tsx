"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani, CreateCompani, UpdateCompani } from "@/types/compani.types";
import { cookies } from "next/headers";

interface updateCompanyProps {
	createData: CreateCompani;
	id: string;
}

export async function updateCompany({ createData, id }: updateCompanyProps) {
	
	const response = await myFetch<UpdateCompani>(API.COMPANI.CREATE + `/${+id}`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createData),
	});

	console.log(response);

	return response;
}

export async function getCompany({ id }: { id: string }) {
  const response = await myFetch<Compani>(API.COMPANI.GET_ID + `/${+id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}
