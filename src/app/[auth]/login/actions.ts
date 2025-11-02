"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { LoginData } from "@/schemas/auth.schema";
import { LoginResponse } from "@/types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface PrevState {
  error: string | undefined
}



export async function loginAction(prevState: PrevState, formData: FormData): Promise<{ error: string | undefined }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch(API.AUTH.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return { error: "Credenciales inválidas" }; // 👈 devolvemos un error, no hacemos throw
  }

  const data = await response.json();

  (await cookies()).set("access_token", data.data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });

  redirect("/dashboard");


}