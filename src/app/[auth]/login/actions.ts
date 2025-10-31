"use server";

import { myFetch, ResponseMyFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { LoginData } from "@/schemas/auth.schema";
import { LoginResponse } from "@/types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { R } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";

interface loginUserProps {
  LoginData: LoginData;
}

export async function loginUser({ LoginData }: loginUserProps) {

  const response = await myFetch<LoginResponse>(
    API.AUTH.LOGIN,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(LoginData),
    }
  );

  console.log(response);

  // ✅ Guardar el token en cookie segura
  // ✅ Guardar token en cookie del servidor
  if (response?.data) {
    
    (await cookies()).set("access_token", response.data?.data.access_token , {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15, // 15 minutos
    });

    // ✅ Redirigir al dashboard
    redirect("/dashboard");
  }
  return response;
}
