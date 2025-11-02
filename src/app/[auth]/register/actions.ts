"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { RegisterData } from "@/schemas/auth.schema";
import { RegisterResponse } from "@/types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { storeToken } from "../coockie-store";

interface RegisterUserProps {
	RegisterData: RegisterData;
}

export async function RegisterUser({ RegisterData }: RegisterUserProps) {
	// console.log(RegisterData);

	const response = await myFetch<RegisterResponse>(API.AUTH.REGISTER, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(RegisterData),
	});

	console.log(response);

	// ✅ Guardar el token en cookie segura
	// ✅ Guardar token en cookie del servidor
	if (response?.data) {

		await storeToken(response.data.data.access_token);

		// ✅ Redirigir al dashboard
		redirect("/dashboard");
	}
	return response.error;
}
