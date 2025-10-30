"use server";

import { myFetch } from "@/common/my-fetch";
import { API } from "@/consts/api";
import { LoginData } from "@/schemas/auth.schema";
import { useTokenStore } from "@/store/token-store";
import { LoginResponse } from "@/types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface loginUserProps {
  LoginData: LoginData;
}

export async function loginUser({ LoginData }: loginUserProps) {

  const response = await myFetch<LoginResponse>(
    API.AUTH.LOGIN,
    {
      method: "POST",
      body: JSON.stringify(LoginData),
    }
  );

  console.log(response);

  // ✅ Guardar el token en cookie segura
  // ✅ Guardar token en cookie del servidor
  if (response?.data) {
    
    

    // ✅ Redirigir al dashboard
    redirect("/dashboard");
  }
  return response.error;
}
