"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani, CreateCompani, UpdateCompani } from "@/types/compani.types";
import { cookies } from "next/headers";

interface updateCompanyProps {
	formData: FormData;
	id: string;

}

export async function updateCompany( id: string, createData: FormData): Promise<Compani | undefined> {

	const response = await myFetch<Compani>(API.COMPANI.UPDATE + `/${+id}`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createData),
	});

	console.log(response);

	if (response.data) {
		return response.data.data;
	}
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
