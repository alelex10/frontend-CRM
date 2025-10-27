"use server";

import { myFetch } from "@/app/common/my-fetch";
import { API } from "@/consts/api";
import { LoginData, RegisterData } from "@/schemas/auth.schema";
import { useTokenStore } from "@/store/token-store";
import { LoginResponse, RegisterResponse } from "@/types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { R } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";

interface RegisterUserProps {
  RegisterData: RegisterData;
}

export async function RegisterUser({ RegisterData }: RegisterUserProps) {
  // console.log(RegisterData);

  const response = await myFetch<RegisterResponse>(
    API.AUTH.REGISTER,
    {
      method: "POST",
      body: JSON.stringify(RegisterData),
    }
  );

  console.log(response);

  // ✅ Guardar el token en cookie segura
  // ✅ Guardar token en cookie del servidor
  if (response?.data) {
    (await cookies()).set("access_token", response.data?.data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15, // 15 minutos
    });

    // ✅ Redirigir al dashboard
    redirect("/dashboard");
  }
  return response.error;
}
