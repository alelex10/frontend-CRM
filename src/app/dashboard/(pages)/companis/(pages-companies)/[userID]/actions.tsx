"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani, CreateCompani, UpdateCompani } from "@/types/compani.types";
import { cookies } from "next/headers";

export interface updateCompanyProps {
	updateData: UpdateCompani;
	id: string;
}

export async function updateCompany(previousState: ResponseMyFetch<Compani> | undefined, {
	updateData,
	id,
}: updateCompanyProps): Promise<ResponseMyFetch<Compani> | undefined> {


	const response = await myFetch<Compani>(API.COMPANI.UPDATE + `/${+id}`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateData),
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
