"use server";

import { API } from "@/consts/api";
import { LoginResponse } from "@/types/auth";
import { ResponseTemplate } from "@/types/response";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


interface PrevState {
  error: string | undefined
}

export async function loginAction(prevState: PrevState, formData: FormData): Promise<{ error: string | undefined }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(API.AUTH.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return { error: "Credenciales inválidas" }; // 👈 devolvemos un error, no hacemos throw
  }

  const data: ResponseTemplate<LoginResponse> = await res.json();


  (await cookies()).set({
    name: "access_token",
    value: data.data.access_token,
    httpOnly: true,      // más seguro, no accesible desde JS
    path: "/",           // disponible en todo el sitio
    sameSite: "lax",     // permite redirecciones sin perder cookie
  })


  redirect("/dashboard");
}