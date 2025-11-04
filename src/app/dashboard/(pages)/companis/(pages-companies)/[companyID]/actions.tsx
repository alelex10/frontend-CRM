"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { Compani, CreateCompani, UpdateCompani } from "@/types/compani.types";
import { Contact } from "@/types/contact.types";
import { ResponsePaginated } from "@/types/response";
import { revalidatePath } from "next/cache";
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

export async function getContactsOfCompany({ id }: { id: string }) {
	const response = await myFetch<Contact[]>(API.COMPANI.GET_CONTACTS + `/${+id}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
			"Content-Type": "application/json",
		},
	});

	return response;
}

export async function getMyContactsNull() {
	const response = await myFetch<Contact[]>
		(API.CONTACT.WITHOUT_COMPANY, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
				"Content-Type": "application/json",
			},
		});

	return response;
}

export interface updateContactsOfCompanyProps {
	contactIds: number[];
	newCompanyId: number | null;
}

export async function updateContactsOfCompany({ contactIds, newCompanyId }: updateContactsOfCompanyProps) {
	const updateData = {
		companyId: newCompanyId,
		contactIds,
	};
	console.log(updateData)
	const response = await myFetch<Contact[]>(API.CONTACT.UPDATE_MANY_CONTACTS, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${(await cookies()).get("access_token")?.value}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateData),
	});

	console.log(response.data);

	revalidatePath(`/dashboard/companis/${newCompanyId}`);
	return response;
}